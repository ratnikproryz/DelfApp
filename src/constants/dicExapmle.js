// https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text/
// look up example
const lookupEX = [
  {
    normalizedSource: 'bonjour',
    displaySource: 'bonjour',
    translations: [
      {
        normalizedTarget: 'hello',
        displayTarget: 'hello',
        posTag: 'OTHER',
        confidence: 1,
        prefixWord: '',
        backTranslations: [
          {
            normalizedText: 'bonjour',
            displayText: 'bonjour',
            numExamples: 1,
            frequencyCount: 22231,
          },
          {
            normalizedText: 'allo',
            displayText: 'allo',
            numExamples: 0,
            frequencyCount: 282,
          },
        ],
      },
    ],
  },
];

// dictionary example
const dicEX = [
  {
    normalizedSource: 'bonjour',
    normalizedTarget: 'hello',
    examples: [
      {
        sourcePrefix: 'Elle devenait des hoche poli et des ',
        sourceTerm: 'bonjour',
        sourceSuffix: 's des gens.',
        targetPrefix: 'She was getting polite nods and ',
        targetTerm: 'hello',
        targetSuffix: 's from people.',
      },
    ],
  },
];
