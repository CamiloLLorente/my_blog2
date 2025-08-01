// Importa hooks de React
import { useState, useEffect, useCallback } from 'react';
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

  const [nivel, setNivel] = useState(2); // Nivel del juego,1 el mas facil, 2 el intermedio, 3 el mas dificil 
  

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

    // Genera las opciones para el nivel actual
    generateOptionsNivel(nextVerse, nivel);

    // Reinicia selección y validación
    setSelectedOption(null);
    setIsCorrect(null);
    setNivel(2); // Resetea el nivel a 2 al seleccionar un nuevo versículo
  };


 const generateOptionsNivel = (verse: Verse, nivelParam: number) => {
    console.log("generateOptionsNivel", verse, nivel);
    if (nivelParam === 1)
      generateOptionsNivel1(verse);
    else if (nivelParam === 2)
      generateOptionsNivel2(verse);
  };

    
  // Función que genera la frase a ocultar y las opciones
  const generateOptionsNivel1 = (verse: Verse) => {
    console.log("generateOptionsNivel1", verse);

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

    // Función que genera la frase a ocultar y las opciones
  const generateOptionsNivel2 = (verse: Verse) => {
    console.log("generateOptionsNivel2", verse);

    // Frase que se va a ocultar
    const phraseToMiss = verse.description; // Usa todo el versículo como frase a ocultar
    setMissingPhrase(phraseToMiss); // Guarda la frase

    console.log("phraseToMiss", phraseToMiss);
    console.log("allVerses", allVerses);
    // Opciones incorrectas tomadas de otros versículos
    const incorrectOptions = allVerses
      .filter(v => v.id !== verse.id) // Excluye el actual
      .map(v => {
        return v.description; // Toma las primeras 3 palabras de otros versículos
      })
      .filter((opt): opt is string => opt !== null && opt !== phraseToMiss) // Elimina nulos o repetidos
      .sort(() => 0.5 - Math.random()) // Mezcla aleatoriamente
      .slice(0, 3); // Toma solo 3

    // Mezcla opción correcta con incorrectas
    const allOptions = [phraseToMiss, ...incorrectOptions].sort(() => 0.5 - Math.random());
    setOptions(allOptions); // Guarda las opciones
    console.log("allOptions", allOptions);
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

  const handleHelp = () => {
    const newNivel = 1;
    setNivel(newNivel); // Cambia el nivel a 1 para dar ayuda
    console.log("nivel en el help", nivel);
    generateOptionsNivel(currentVerse as Verse, newNivel); // Genera opciones para el nuevo nivel

  }

  // --- RENDERIZADO DE COMPONENTES --- //

  // Mensaje si no hay versículos favoritos
  const renderNoVerses = () => (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center p-10 border rounded-lg shadow-xl bg-white">
        <h1 className="text-3xl font-bold text-[#004694] mb-4">No tienes versículos favoritos</h1>
        <p className="text-gray-600">Agrega algunos versículos a tus favoritos para comenzar a repasar.</p>
      </div>
    </div>
  );

  // Pantalla de fin de juego
  const renderGameOver = () => (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center p-10 border rounded-lg shadow-xl bg-white">
        <h1 className="text-3xl font-bold text-[#004694] mb-4">¡Juego Terminado!</h1>
        <p className="text-2xl mb-8">Tu puntuación final es: <span className="font-bold text-[#004694]">{score}</span></p>
        <button
          onClick={startGame}
          className="bg-[#004694] text-white px-6 py-3 rounded-md hover:bg-[#003366] transition-colors"
        >
          Jugar de Nuevo
        </button>
      </div>
    </div>
  );

  // Vista del juego en curso
  const renderGame = () => (
    <div className="w-full max-w-2xl p-8 border rounded-lg shadow-xl bg-white">
      {!gameStarted ? (
        <div className="text-center">
          <button
            onClick={startGame}
            className="bg-[#004694] text-white px-8 py-4 rounded-md hover:bg-[#003366] transition-colors text-lg"
          >
            Comenzar
          </button>
        </div>
      ) : currentVerse ? (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center text-[#004694]">
            {currentVerse.title || 'Versículo'}
          </h2>
          <p className="text-xl mb-6 text-center text-gray-700">
            {nivel === 1 && currentVerse.description.replace(missingPhrase || '', '______') }
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {options.map(option => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                disabled={!!selectedOption}
                className={`p-4 rounded-md text-left transition-all duration-300
                  ${!selectedOption ? 'hover:bg-gray-100 border' : ''}
                  ${selectedOption && option === missingPhrase ? 'bg-green-200 border-green-400' : ''}
                  ${selectedOption && option !== missingPhrase ? 'bg-red-200 border-red-400' : 'border'}
                  ${selectedOption ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="text-center mt-6">
          <button className='bg-[#004694] text-white px-6 py-3 rounded-md mt-4 hover:bg-[#003366] transition-colors' onClick={() => handleHelp()}>Dar ayuda</button>
          </div>
          {/* Mensaje de respuesta correcta o incorrecta */}
          {selectedOption && (
            <div className="mt-6 text-center">
              <p className={`text-2xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {isCorrect ? '¡Correcto!' : 'Incorrecto'}
              </p>
              <button
                onClick={handleNext}
                className="bg-[#004694] text-white px-6 py-3 rounded-md mt-4 hover:bg-[#003366] transition-colors"
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );

  // --- RENDERIZADO PRINCIPAL ---

  if (allVerses.length === 0) {
    return renderNoVerses();
  }

  if (gameOver) {
    return renderGameOver();
  }

  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#004694] mb-8">Repasa tus Versículos</h1>
      {renderGame()}
      {gameStarted && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Puntuación: <span className="text-[#004694]">{score}</span></h2>
        </div>
      )}
    </div>
  );
};

// Exporta el componente
export default ReviewYourVerses;
