import { useState, useEffect } from 'react';
import { Verse } from '../../data/interfaces';
import useFavorite from '../../hook/useFavorite';

 const ReviewYourVerses = () => {
  const { favorites } = useFavorite();
  const [verses, setVerses] = useState<Verse[]>([]);
  const [currentVerseIndex, setCurrentVerseIndex] = useState<number | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [missingPhrase, setMissingPhrase] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (favorites) {
      const favoriteVerses = Object.values(favorites).flat();
      setVerses(favoriteVerses);
    }
  }, [favorites]);

  const startGame = () => {
    console.log("Starting game with verses:", verses);
    if (verses.length > 0) {
      console.log("Verses available for game:", verses.length);
      const randomIndex = Math.floor(Math.random() * verses.length);
      console.log("Random index:", randomIndex);
      setCurrentVerseIndex(randomIndex);
      generateOptions(verses[randomIndex]);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const generateOptions = (verse: Verse) => {
    console.log("Generating options for verse:", verse);
    const words = verse.description.split(' ');
    // Determine the length of the phrase to hide, e.g., 30% to 50% of the verse
   const phraseLength = Math.floor(words.length * (Math.random() * 0.1 + 0.7));
    console.log("lengt word:", words.length);
    console.log("Phrase length:", phraseLength);
    const startIndex = Math.floor(Math.random() * (words.length - phraseLength + 1));
    console.log("Start index for missing phrase:", startIndex);
    const phraseToMiss = words.slice(startIndex, startIndex + phraseLength).join(' ');
    setMissingPhrase(phraseToMiss);

    // Generate incorrect options by taking phrases of similar length from other verses
    const incorrectOptions = verses
      .filter(v => v.id !== verse.id)
      .map(v => {
        const otherWords = v.description.split(' ');
        if (otherWords.length > phraseLength) {
          const otherStartIndex = Math.floor(Math.random() * (otherWords.length - phraseLength));
          return otherWords.slice(otherStartIndex, otherStartIndex + phraseLength).join(' ');
        }
        return null;
      })
      .filter((opt): opt is string => opt !== null && opt !== phraseToMiss)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const allOptions = [phraseToMiss, ...incorrectOptions].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
  };

  const handleOptionClick = (option: string) => {
    if (selectedOption) return;

    setSelectedOption(option);
    if (option === missingPhrase) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
  };

  if (verses.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-[#004694] mb-4">No tienes versículos favoritos</h1>
        <p>Agrega algunos versículos a tus favoritos para comenzar a repasar.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold text-[#004694] mb-8">Repasa tus versículos</h1>
      {currentVerseIndex === null ? (
        <button
          onClick={startGame}
          className="bg-[#004694] text-white px-4 py-2 rounded-md"
        >
          Comenzar
        </button>
      ) : (
        <div>
          <p className="text-lg mb-4">
            {verses[currentVerseIndex]?.description.replace(missingPhrase || '', '______')}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {options.map(option => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`border p-4 rounded-md ${selectedOption && option === missingPhrase ? 'bg-green-200' : ''} ${selectedOption && option !== missingPhrase ? 'bg-red-200' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption && (
            <div className="mt-4">
              <p className={`font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                {isCorrect ? '¡Correcto!' : 'Incorrecto'}
              </p>
              <button
                onClick={startGame}
                className="bg-[#004694] text-white px-4 py-2 rounded-md mt-4"
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      )}
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Puntuación: {score}</h2>
      </div>
    </div>
  );
};

export default ReviewYourVerses;
