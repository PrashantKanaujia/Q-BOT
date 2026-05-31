manager.addDocument('en', 'Hello', 'greeting');
manager.addDocument('en', 'Hi', 'greeting');
manager.addDocument('en', 'How are you?', 'greeting');
manager.addDocument('en', 'Tell me a joke', 'joke');
manager.addDocument('en', 'What is the weather like today?', 'weather');
manager.addDocument('en', 'What is the time?', 'time');

// Add responses
manager.addAnswer('en', 'greeting', 'Hi there! How can I help you today?');
manager.addAnswer('en', 'joke', 'Why don’t skeletons fight each other? They don’t have the guts!');
manager.addAnswer('en', 'weather', 'The weather is sunny today.');
manager.addAnswer('en', 'time', 'The time is 12:00 PM.');

manager.addDocument('en', 'What is my name?', 'name');
manager.addDocument('en', 'Can you tell me my name?', 'name');
manager.addDocument('en', 'My name is?', 'name');
manager.addDocument('en', 'Who am I?', 'name');
manager.addDocument('en', 'What do you call me?', 'name');
manager.addDocument('en', 'What is my full name?', 'name');

manager.addDocument('en', 'What is my date of birth?', 'dob');
manager.addDocument('en', 'Tell me my dob?', 'dob');
manager.addDocument('en', 'When is my birthday?', 'dob');
manager.addDocument('en', 'When was I born?', 'dob');
manager.addDocument('en', 'Can you tell me when I was born?', 'dob');

manager.addDocument('en', 'What are my CT1 marks?', 'ct1marks');
manager.addDocument('en', 'How many CT1 marks did I score?', 'ct1marks');
manager.addDocument('en', 'What is my CT1 result?', 'ct1marks');
manager.addDocument('en', 'How much did I score in CT1?', 'ct1marks');
manager.addDocument('en', 'What are my marks in CT1?', 'ct1marks');

manager.addDocument('en', 'What is my age?', 'age');
manager.addDocument('en', 'Can you tell me my age?', 'age');
manager.addDocument('en', 'How old am I?', 'age');
manager.addDocument('en', 'How many years old am I?', 'age');
manager.addDocument('en', 'What is my current age?', 'age');

// Add new training data for CT2 marks
manager.addDocument('en', 'What are my CT2 marks?', 'ct2marks');
manager.addDocument('en', 'How many marks did I get in CT2?', 'ct2marks');
manager.addDocument('en', 'What is my CT2 result?', 'ct2marks');
manager.addDocument('en', 'How much did I score in CT2?', 'ct2marks');
manager.addDocument('en', 'What are my marks in CT2?', 'ct2marks');
