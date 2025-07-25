// Importa hooks de React
import { useState, useEffect } from 'react';
import { Verse } from '../../data/interfaces';
import useFavorite from '../../hook/useFavorite';

const ReviewYourVerses = () => {
  // Obtiene los versículos favoritos del usuario desde el hook
  const { favorites } = useFavorite();
  // Estado: Todos los versículos favoritos cargados
  const [allVerses, setAllVerses] = useState<Verse[]>([]);
  // Estado: Versículos aún disponibles en la partida
  const [availableVerses, setAvailableVerses] = useState<Verse[]>([]);
  // Estado: Versículo actual que se está mostrando
  const [currentVerse, setCurrentVerse] = useState<Verse | null>(null);
  // Estado: Opciones múltiples generadas para responder
  const [options, setOptions] = useState<string[]>([]);
  // Estado: Parte del versículo ocultada (a adivinar)
  const [missingPhrase, setMissingPhrase] = useState<string | null>(null);
  // Estado: Opción seleccionada por el usuario
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  // Estado: Indica si la respuesta fue correcta
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  // Estado: Puntuación acumulada del usuario
  const [score, setScore] = useState(0);
  // Estado: Indica si el juego terminó
  const [gameOver, setGameOver] = useState(false);
  // Estado: Indica si el juego ha comenzado
  const [gameStarted, setGameStarted] = useState(false);
  

  useEffect(() => {
    if (favorites) {
      // Convierte los favoritos en un array plano
      const favoriteVerses = Object.values(favorites).flat();
      setAllVerses(favoriteVerses);
    }
  }, [favorites]);

  const startGame = () => {
    setScore(0); // Reinicia el puntaje
    setGameOver(false); // El juego no ha terminado
    setGameStarted(true); // Marca como iniciado
    const initialVerses = [...allVerses]; // Copia de los versículos
    setAvailableVerses(initialVerses); // Guarda los disponibles
    selectNextVerse(initialVerses); // Selecciona los siguientes versículos o el primero
  };

  // Función que selecciona el siguiente versículo aleatorio
  const selectNextVerse = (currentAvailableVerses: Verse[]) => {
    console.log("currentAvailableVerses", currentAvailableVerses);
    if (currentAvailableVerses.length === 0) {
      // Si ya no hay más versículos, termina el juego
      setGameOver(true);
      setCurrentVerse(null);
      return;
    }

    // Selecciona un índice aleatorio
    const randomIndex = Math.floor(Math.random() * currentAvailableVerses.length);
    const nextVerse = currentAvailableVerses[randomIndex];

    // Asigna el versículo actual
    setCurrentVerse(nextVerse);

    // Genera las opciones de respuesta
    generateOptions(nextVerse);

    // Reinicia selección y validación
    setSelectedOption(null);
    setIsCorrect(null);
  };

  // Función que genera la frase a ocultar y las opciones
  const generateOptions = (verse: Verse) => {
    const words = verse.description.split(' '); // Divide el versículo en palabras

    // Calcula la longitud de la frase a ocultar (70% a 80% del total)
    const phraseLength = Math.floor(words.length * (Math.random() * 0.1 + 0.7));

    // Índice aleatorio de inicio para cortar la frase
    const startIndex = Math.floor(Math.random() * (words.length - phraseLength + 1));

    // Frase que se va a ocultar
    const phraseToMiss = words.slice(startIndex, startIndex + phraseLength).join(' ');
    setMissingPhrase(phraseToMiss); // Guarda la frase

    // Opciones incorrectas tomadas de otros versículos
    const incorrectOptions = allVerses
      .filter(v => v.id !== verse.id) // Excluye el actual
      .map(v => {
        const otherWords = v.description.split(' ');
        if (otherWords.length > phraseLength) {
          const otherStartIndex = Math.floor(Math.random() * (otherWords.length - phraseLength));
          return otherWords.slice(otherStartIndex, otherStartIndex + phraseLength).join(' ');
        }
        return null;
      })
      .filter((opt): opt is string => opt !== null && opt !== phraseToMiss) // Elimina nulos o repetidos
      .sort(() => 0.5 - Math.random()) // Mezcla aleatoriamente
      .slice(0, 3); // Toma solo 3

    // Mezcla opción correcta con incorrectas
    const allOptions = [phraseToMiss, ...incorrectOptions].sort(() => 0.5 - Math.random());
    setOptions(allOptions); // Guarda las opciones
  };

  // Función que maneja cuando el usuario hace clic en una opción
  const handleOptionClick = (option: string) => {
    if (selectedOption) return; // Evita múltiples selecciones

    setSelectedOption(option); // Guarda la opción elegida

    if (option === missingPhrase) {
      // Si acertó
      setIsCorrect(true);
      setScore(score + 1); // Suma puntaje
    } else {
      // Si falló
      setIsCorrect(false);
    }
  };

  // Función que pasa al siguiente versículo
  const handleNext = () => {
    let nextAvailableVerses = [...availableVerses];

    // Si  versículo actual, lo elimina de la lista
    if (currentVerse) {
      nextAvailableVerses = nextAvailableVerses.filter(v => v.id !== currentVerse.id);
    }

    // Guarda los nuevos disponibles y selecciona otro
    setAvailableVerses(nextAvailableVerses);
    selectNextVerse(nextAvailableVerses);
  };

  // Si no hay versículos favoritos, muestra mensaje
  if (allVerses.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-[#004694] mb-4">No tienes versículos favoritos</h1>
        <p>Agrega algunos versículos a tus favoritos para comenzar a repasar.</p>
      </div>
    );
  }

  // Si el juego ha terminado, muestra puntaje final y botón para reiniciar
  if (gameOver) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-[#004694] mb-4">¡Juego Terminado!</h1>
        <p className="text-2xl mb-8">Tu puntuación final es: {score}</p>
        <button
          onClick={startGame}
          className="bg-[#004694] text-white px-4 py-2 rounded-md"
        >
          Jugar de Nuevo
        </button>
      </div>
    );
  }

  // Renderizado principal del juego
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-[#004694] mb-8">Repasa tus versículos</h1>

      {/* Si aún no comenzó el juego, muestra el botón de comenzar */}
      {!gameStarted ? (
        <button
          onClick={startGame}
          className="bg-[#004694] text-white px-4 py-2 rounded-md"
        >
          Comenzar
        </button>

      // Si el juego está en curso y hay un versículo activo
      ) : currentVerse ? (
        <div>
          {/* Muestra el versículo con la frase faltante */}
          <p className="text-lg mb-4">
            {currentVerse.description.replace(missingPhrase || '', '______')}
          </p>

          {/* Muestra las opciones de respuesta */}
          <div className="grid grid-cols-2 gap-4">
            {options.map(option => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`border p-4 rounded-md 
                  ${selectedOption && option === missingPhrase ? 'bg-green-200' : ''} 
                  ${selectedOption && option !== missingPhrase ? 'bg-red-200' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Muestra resultado y botón siguiente si ya seleccionó */}
          {selectedOption && (
            <div className="mt-4">
              <p className={`font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                {isCorrect ? '¡Correcto!' : 'Incorrecto'}
              </p>
              <button
                onClick={handleNext}
                className="bg-[#004694] text-white px-4 py-2 rounded-md mt-4"
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      ) : null}

      {/* Muestra la puntuación actual */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Puntuación: {score}</h2>
      </div>
    </div>
  );
};

// Exporta el componente
export default ReviewYourVerses;
