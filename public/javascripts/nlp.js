const{NlpManager} = require("node-nlp");
const manager =new NlpManager({languages:['en']});

async function initializeNlp(){
   
    manager.addDocument('en', 'What is my name?', 'name');
    manager.addDocument('en', 'Can you tell me my name?', 'name');
    manager.addDocument('en', 'What do you call me?', 'name');
    manager.addDocument('en', 'What’s my full name?', 'name');
    manager.addDocument('en', 'How do you address me?', 'name');
    manager.addDocument('en', 'What is my name again?', 'name');
    manager.addDocument('en', 'What do I go by?', 'name');
    manager.addDocument('en', 'Who am I?', 'name');
    manager.addDocument('en', 'Can you say my name?', 'name');
    manager.addDocument('en', 'What name did you assign me?', 'name');
    manager.addDocument('en', 'Please tell me my name', 'name');
    manager.addDocument('en', 'What’s my name?', 'name');
    manager.addDocument('en', 'Could you remind me of my name?', 'name');
    manager.addDocument('en', 'Who am I called?', 'name');
    manager.addDocument('en', 'Tell me my name please', 'name');
    manager.addDocument('en', 'Give me my name', 'name');
    manager.addDocument('en', 'Say my name', 'name');
    manager.addDocument('en', 'What is it that you call me?', 'name');
    manager.addDocument('en', 'Please tell me who I am', 'name');
    manager.addDocument('en', 'How do you refer to me?', 'name');
    manager.addDocument('en', 'My name is?', 'name');
    manager.addDocument('en', 'My full name?', 'name');
    manager.addDocument('en', 'What do you call me by?', 'name');
    manager.addDocument('en', 'What name do you know me by?', 'name');
    manager.addDocument('en', 'What am I called?', 'name');
    manager.addDocument('en', 'What name should I use?', 'name');
    manager.addDocument('en', 'How do you know me?', 'name');
    manager.addDocument('en', 'Who am I to you?', 'name');
    manager.addDocument('en', 'What’s the name I use?', 'name');
    manager.addDocument('en', 'Tell me my full name', 'name');
    manager.addDocument('en', 'How should I call myself?', 'name');
    manager.addDocument('en', 'What is the name I go by?', 'name');
    manager.addDocument('en', 'What’s the name on my ID?', 'name');
    manager.addDocument('en', 'What do you call me in your system?', 'name');
    manager.addDocument('en', 'Tell me my name in the system', 'name');
    manager.addDocument('en', 'Do you know my name?', 'name');
    manager.addDocument('en', 'Can you tell me how you know my name?', 'name');
    manager.addDocument('en', 'What name do you have for me?', 'name');
    manager.addDocument('en', 'What is my full name again?', 'name');
    manager.addDocument('en', 'Tell me my personal name', 'name');
    manager.addDocument('en', 'What name is registered under my account?', 'name');
    manager.addDocument('en', 'Do you have my full name?', 'name');
    manager.addDocument('en', 'What do you call me in your records?', 'name');
    manager.addDocument('en', 'What’s my username?', 'name');
    manager.addDocument('en', 'What’s the name you have for me?', 'name');
    manager.addDocument('en', 'What name is assigned to me?', 'name');
    manager.addDocument('en', 'How should I introduce myself?', 'name');
    manager.addDocument('en', 'Can you tell me my full name?', 'name');
    manager.addDocument('en', 'Can you remind me of my name?', 'name');
    manager.addDocument('en', 'What do you call me in your database?', 'name');
    manager.addDocument('en', 'Do you remember my name?', 'name');
    manager.addDocument('en', 'What name is listed for me?', 'name');
    manager.addDocument('en', 'Tell me my identity name', 'name');
    manager.addDocument('en', 'What’s my identity name?', 'name');
    manager.addDocument('en', 'What’s the first name you have for me?', 'name');
    manager.addDocument('en', 'What’s my complete name?', 'name');
    manager.addDocument('en', 'What do I go by in your records?', 'name');
    manager.addDocument('en', 'What’s my name again, please?', 'name');
    manager.addDocument('en', 'Can you please tell me my full name?', 'name');
    manager.addDocument('en', 'What’s my name for this account?', 'name');
    manager.addDocument('en', 'What name is associated with my account?', 'name');
    manager.addDocument('en', 'Who am I known as?', 'name');
    manager.addDocument('en', 'What name do I go by?', 'name');
    manager.addDocument('en', 'Please tell me what name I use', 'name');
    manager.addDocument('en', 'What do you call me on your system?', 'name');
    manager.addDocument('en', 'How do you identify me?', 'name');
    manager.addDocument('en', 'Who am I to you?', 'name');
    manager.addDocument('en', 'What is my name in your system?', 'name');
    manager.addDocument('en', 'How am I identified in your system?', 'name');
    manager.addDocument('en', 'What’s the full name in the database for me?', 'name');
    manager.addDocument('en', 'Can you show me my name?', 'name');
    manager.addDocument('en', 'What’s my full identification name?', 'name');
    manager.addDocument('en', 'What name is stored for me?', 'name');
    manager.addDocument('en', 'Tell me my system name', 'name');
    manager.addDocument('en', 'How do you address me in your system?', 'name');
    manager.addDocument('en', 'How are you identifying me?', 'name');
    


















    manager.addDocument('en', 'When is my birthday?', 'dob');
manager.addDocument('en', 'What is my date of birth?', 'dob');
manager.addDocument('en', 'Can you tell me when I was born?', 'dob');
manager.addDocument('en', 'When was I born?', 'dob');
manager.addDocument('en', 'What is my birthdate?', 'dob');
manager.addDocument('en', 'When did I come into this world?', 'dob');
manager.addDocument('en', 'What is the exact date I was born?', 'dob');
manager.addDocument('en', 'Tell me my birthdate', 'dob');
manager.addDocument('en', 'When is my bday?', 'dob');
manager.addDocument('en', 'What is my birth date, please?', 'dob');
manager.addDocument('en', 'What is my b-day?', 'dob');
manager.addDocument('en', 'What year was I born?', 'dob');
manager.addDocument('en', 'What day was I born on?', 'dob');
manager.addDocument('en', 'Tell me when my birthday is', 'dob');
manager.addDocument('en', 'Can you remind me of my date of birth?', 'dob');
manager.addDocument('en', 'When’s my birthday coming up?', 'dob');
manager.addDocument('en', 'What’s the exact day I was born?', 'dob');
manager.addDocument('en', 'Can you share my birthdate?', 'dob');
manager.addDocument('en', 'When did I first arrive?', 'dob');
manager.addDocument('en', 'What year did I celebrate my birthday in?', 'dob');
manager.addDocument('en', 'When is my next birthday?', 'dob');
manager.addDocument('en', 'Tell me the date I was born', 'dob');
manager.addDocument('en', 'When did I enter this world?', 'dob');
manager.addDocument('en', 'Can you show me my birth date?', 'dob');
manager.addDocument('en', 'Tell me when I was born?', 'dob');
manager.addDocument('en', 'Do you know when I was born?', 'dob');
manager.addDocument('en', 'Can you provide my date of birth?', 'dob');
manager.addDocument('en', 'Give me my birthdate', 'dob');
manager.addDocument('en', 'When was I born, exactly?', 'dob');
manager.addDocument('en', 'Tell me my date of birth again', 'dob');
manager.addDocument('en', 'Can you remind me when I was born?', 'dob');
manager.addDocument('en', 'What’s my birthdate again?', 'dob');
manager.addDocument('en', 'What’s the date I was born?', 'dob');
manager.addDocument('en', 'What is my birthday again?', 'dob');
manager.addDocument('en', 'When exactly is my birthday?', 'dob');
manager.addDocument('en', 'Can you tell me when I was born?', 'dob');
manager.addDocument('en', 'What day did I come into this world?', 'dob');
manager.addDocument('en', 'What’s my birthdate once again?', 'dob');
manager.addDocument('en', 'Tell me when my birthday is again', 'dob');
manager.addDocument('en', 'Can you tell me the exact day I was born?', 'dob');
manager.addDocument('en', 'When is my birthday this year?', 'dob');
manager.addDocument('en', 'What year was I born, please?', 'dob');
manager.addDocument('en', 'Tell me my birth year', 'dob');
manager.addDocument('en', 'How old am I in terms of years?', 'dob');
manager.addDocument('en', 'When was I born exactly?', 'dob');
manager.addDocument('en', 'What’s the date I was born?', 'dob');
manager.addDocument('en', 'Do you remember my birth date?', 'dob');
manager.addDocument('en', 'Can you tell me my birth year?', 'dob');
manager.addDocument('en', 'When did I celebrate my last birthday?', 'dob');
manager.addDocument('en', 'What’s my birth month?', 'dob');
manager.addDocument('en', 'How many years ago was I born?', 'dob');
manager.addDocument('en', 'Can you share when I was born?', 'dob');
manager.addDocument('en', 'What is the exact day of my birth?', 'dob');
manager.addDocument('en', 'Can you remind me when I was born?', 'dob');
manager.addDocument('en', 'When was my last birthday?', 'dob');
manager.addDocument('en', 'When is my next birthday coming up?', 'dob');
manager.addDocument('en', 'Tell me the year I was born', 'dob');
manager.addDocument('en', 'When’s my birthday coming?', 'dob');
manager.addDocument('en', 'What is the exact time of my birth?', 'dob');
manager.addDocument('en', 'Tell me my birth date, please', 'dob');
manager.addDocument('en', 'When is my birthday date?', 'dob');

// Handling misspellings, short forms, and variations
manager.addDocument('en', 'When’s my b-day?', 'dob');
manager.addDocument('en', 'What’s my bday?', 'dob');
manager.addDocument('en', 'When was I born pls?', 'dob');
manager.addDocument('en', 'Can u tell me my birth date?', 'dob');
manager.addDocument('en', 'When did I come in this world?', 'dob');
manager.addDocument('en', 'What is my birthdate again?', 'dob');
manager.addDocument('en', 'What is my bday date?', 'dob');
manager.addDocument('en', 'Tell me the date I was born pls?', 'dob');
manager.addDocument('en', 'Can you remind me of my bday?', 'dob');
manager.addDocument('en', 'Tell me when I was born pls?', 'dob');
manager.addDocument('en', 'Can you tell me my birth date pls?', 'dob');
manager.addDocument('en', 'When was I born exactly pls?', 'dob');
manager.addDocument('en', 'What is my dob?', 'dob');
manager.addDocument('en', 'What day did I have a birthday on?', 'dob');
manager.addDocument('en', 'Tell me my bday pls', 'dob');
manager.addDocument('en', 'What day is my b-day?', 'dob');
manager.addDocument('en', 'How old was I when I was born?', 'dob');
manager.addDocument('en', 'When’s my dob?', 'dob');
manager.addDocument('en', 'When did I celebrate my bday?', 'dob');
manager.addDocument('en', 'What’s my birth year pls?', 'dob');
manager.addDocument('en', 'What is my birth year pls?', 'dob');
manager.addDocument('en', 'Can you tell me my b-day year?', 'dob');
manager.addDocument('en', 'When was I born exactly pls?', 'dob');
manager.addDocument('en', 'How old am I today?', 'dob');
manager.addDocument('en', 'What’s my b-day?', 'dob');
manager.addDocument('en', 'Can you tell me when I turned a year older?', 'dob');
manager.addDocument('en', 'How long has it been since my birth?', 'dob');
manager.addDocument('en', 'How old am I?', 'dob');
manager.addDocument('en', 'When did I celebrate my last b-day?', 'dob');
manager.addDocument('en', 'How many years ago was I born pls?', 'dob');
manager.addDocument('en', 'When is my next birthday pls?', 'dob');
manager.addDocument('en', 'Can you show me my b-day?', 'dob');
manager.addDocument('en', 'When did I arrive in the world?', 'dob');
manager.addDocument('en', 'When’s my bday coming?', 'dob');
manager.addDocument('en', 'What is the exact date of my b-day?', 'dob');







manager.addDocument('en', 'What are my CT marks?', 'ct1_marks');
manager.addDocument('en', 'How many marks did I get in CT?', 'ct1_marks');
manager.addDocument('en', 'How much did I score in CT?', 'ct1_marks');
manager.addDocument('en', 'What’s my CT result?', 'ct1_marks');
manager.addDocument('en', 'How well did I perform in CT?', 'ct1_marks');
manager.addDocument('en', 'What are my results for CT?', 'ct1_marks');
manager.addDocument('en', 'Tell me my CT score', 'ct1_marks');
manager.addDocument('en', 'How many marks did I get in CT exams?', 'ct1_marks');
manager.addDocument('en', 'What’s my score in CT?', 'ct1_marks');
manager.addDocument('en', 'Can you share my CT marks?', 'ct1_marks');
manager.addDocument('en', 'How well did I do in CT?', 'ct1_marks');
manager.addDocument('en', 'Can you show my CT result?', 'ct1_marks');
manager.addDocument('en', 'How did I perform in CT?', 'ct1_marks');
manager.addDocument('en', 'What were my marks for CT?', 'ct1_marks');
manager.addDocument('en', 'Tell me my result in CT', 'ct1_marks');
manager.addDocument('en', 'What’s my CT score so far?', 'ct1_marks');
manager.addDocument('en', 'How many marks did I get in the first CT?', 'ct1_marks');
manager.addDocument('en', 'Can you give me my CT1 marks?', 'ct1_marks');
manager.addDocument('en', 'What is my CT1 grade?', 'ct1_marks');
manager.addDocument('en', 'How much did I score in CT1?', 'ct1_marks');
manager.addDocument('en', 'What was my CT1 grade?', 'ct1_marks');
manager.addDocument('en', 'How did I perform in CT1 exam?', 'ct1_marks');
manager.addDocument('en', 'Can you show me my CT1 marks?', 'ct1_marks');
manager.addDocument('en', 'What are my marks in CT1?', 'ct1_marks');
manager.addDocument('en', 'Tell me my CT1 marks', 'ct1_marks');
manager.addDocument('en', 'How did I do in CT1?', 'ct1_marks');
manager.addDocument('en', 'Can you provide my CT1 result?', 'ct1_marks');
manager.addDocument('en', 'What’s the score for my CT1 exam?', 'ct1_marks');
manager.addDocument('en', 'How many marks did I get in the CT1 exams?', 'ct1_marks');
manager.addDocument('en', 'What’s my CT1 exam score?', 'ct1_marks');
manager.addDocument('en', 'Can you give me my CT1 result?', 'ct1_marks');
manager.addDocument('en', 'How did I do on the CT1 exam?', 'ct1_marks');
manager.addDocument('en', 'Can you tell me my CT1 score?', 'ct1_marks');
manager.addDocument('en', 'How much did I score in CT1 exam?', 'ct1_marks');
manager.addDocument('en', 'What marks did I get for CT1?', 'ct1_marks');
manager.addDocument('en', 'Can you tell me my CT1 exam marks?', 'ct1_marks');
manager.addDocument('en', 'What were my marks for CT1?', 'ct1_marks');
manager.addDocument('en', 'How did I score in CT1?', 'ct1_marks');
manager.addDocument('en', 'How well did I score in CT1 exam?', 'ct1_marks');
manager.addDocument('en', 'Can you remind me of my CT1 marks?', 'ct1_marks');
manager.addDocument('en', 'Can you give me my CT1 exam marks?', 'ct1_marks');
manager.addDocument('en', 'Tell me about my CT1 marks', 'ct1_marks');
manager.addDocument('en', 'What’s the result of my CT1 exam?', 'ct1_marks');
manager.addDocument('en', 'How many marks did I get on CT1 exam?', 'ct1_marks');
manager.addDocument('en', 'Give me my CT1 marks', 'ct1_marks');
manager.addDocument('en', 'What was my CT1 score?', 'ct1_marks');
manager.addDocument('en', 'What’s the result of CT1 exam?', 'ct1_marks');
manager.addDocument('en', 'Can you share my CT1 grade?', 'ct1_marks');
manager.addDocument('en', 'What’s the grade for my CT1 exam?', 'ct1_marks');
manager.addDocument('en','ct1marks',"ct1_marks")
manager.addDocument('en', 'What are my CT1 marks?', 'ct1_marks');
manager.addDocument('en', 'How many marks did I get in CT1?', 'ct1_marks');
manager.addDocument('en', 'How much did I score in CT1?', 'ct1_marks');
manager.addDocument('en', 'What’s my CT1 result?', 'ct1_marks');
manager.addDocument('en', 'How well did I perform in CT1?', 'ct1_marks');
manager.addDocument('en', 'What are my results for CT1?', 'ct1_marks');
manager.addDocument('en', 'Tell me my CT1 score', 'ct1_marks');
manager.addDocument('en', 'How many marks did I get in CT1 exams?', 'ct1_marks');
manager.addDocument('en', 'What’s my score in CT1?', 'ct1_marks');
manager.addDocument('en', 'Can you share my CT1 marks?', 'ct1_marks');
manager.addDocument('en', 'How well did I do in CT1?', 'ct1_marks');
manager.addDocument('en', 'Can you show my CT1 result?', 'ct1_marks');
manager.addDocument('en', 'How did I perform in CT1?', 'ct1_marks');
manager.addDocument('en', 'What were my marks for CT1?', 'ct1_marks');
manager.addDocument('en', 'Tell me my result in CT1', 'ct1_marks');
manager.addDocument('en', 'What’s my CT1 score so far?', 'ct1_marks');

// Misspellings, short forms, and variations
manager.addDocument('en', 'What are my CT1 marks?', 'ct1_marks');
manager.addDocument('en', 'How many marks did I score in CT1?', 'ct1_marks');
manager.addDocument('en', 'What’s my CT1 mark?', 'ct1_marks');
manager.addDocument('en', 'How much did I score in CT1 exam?', 'ct1_marks');
manager.addDocument('en', 'Tell me my CT1 mark', 'ct1_marks');
manager.addDocument('en', 'How did I do in my CT1?', 'ct1_marks');
manager.addDocument('en', 'Can you tell me my CT marks?', 'ct1_marks');
manager.addDocument('en', 'Can you show my CT marks?', 'ct1_marks');
manager.addDocument('en', 'What’s my CT1 grades?', 'ct1_marks');
manager.addDocument('en', 'What is my CT1 result?', 'ct1_marks');
manager.addDocument('en', 'How well did I do in CT1 exam?', 'ct1_marks');
manager.addDocument('en', 'What’s the score for my CT1?', 'ct1_marks');
manager.addDocument('en', 'What’s my CT exam score?', 'ct1_marks');
manager.addDocument('en', 'Tell me my CT1 exam marks', 'ct1_marks');
manager.addDocument('en', 'How many marks did I get on CT exam?', 'ct1_marks');
manager.addDocument('en', 'What was my CT1 marks score?', 'ct1_marks');
manager.addDocument('en', 'What is my CT1 results?', 'ct1_marks');
manager.addDocument('en', 'Can you provide my CT1 score?', 'ct1_marks');
manager.addDocument('en', 'Tell me my CT1 marks now', 'ct1_marks');
manager.addDocument('en', 'What are my marks for CT exam?', 'ct1_marks');
manager.addDocument('en', 'What was my score in CT1?', 'ct1_marks');
manager.addDocument('en', 'How much did I get in CT1?', 'ct1_marks');
manager.addDocument('en', 'Tell me about my CT1 results', 'ct1_marks');
manager.addDocument('en', 'How did I perform in CT exam?', 'ct1_marks');
manager.addDocument('en', 'What’s my CT1 grade score?', 'ct1_marks');
manager.addDocument('en', 'How did I do on CT1 exam?', 'ct1_marks');
manager.addDocument('en', 'Can you remind me my CT marks?', 'ct1_marks');
manager.addDocument('en', 'When will I get my CT1 results?', 'ct1_marks');
manager.addDocument('en', 'What’s my CT1 results so far?', 'ct1_marks');
manager.addDocument('en', 'When do I get my CT1 marks?', 'ct1_marks');
manager.addDocument('en', 'Can you give me my CT marks?', 'ct1_marks');
manager.addDocument('en', 'Tell me my CT1 exam result', 'ct1_marks');
manager.addDocument('en', 'What are my marks?', 'ct1_marks');
manager.addDocument('en', 'How many marks did I get?', 'ct1_marks');
manager.addDocument('en', 'What’s my score?', 'ct1_marks');
manager.addDocument('en', 'How much did I score?', 'ct1_marks');
manager.addDocument('en', 'Can you tell me my marks?', 'ct1_marks');
manager.addDocument('en', 'How well did I do in my exam?', 'ct1_marks');
manager.addDocument('en', 'What was my score?', 'ct1_marks');
manager.addDocument('en', 'How did I perform in my exam?', 'ct1_marks');
manager.addDocument('en', 'Tell me my marks', 'ct1_marks');
manager.addDocument('en', 'How many marks did I get in my test?', 'ct1_marks');
manager.addDocument('en', 'What was my exam result in marks?', 'ct1_marks');
manager.addDocument('en', 'What were my marks?', 'ct1_marks');
manager.addDocument('en', 'Can you show my marks?', 'ct1_marks');
manager.addDocument('en', 'What marks did I get?', 'ct1_marks');
manager.addDocument('en', 'Tell me the marks I got', 'ct1_marks');
manager.addDocument('en', 'What are my test marks?', 'ct1_marks');
manager.addDocument('en', 'How did I score on the test?', 'ct1_marks');
manager.addDocument('en', 'What’s the total marks I scored?', 'ct1_marks');
manager.addDocument('en', 'What’s my marks for the exam?', 'ct1_marks');
manager.addDocument('en', 'What’s my exam marks?', 'ct1_marks');
manager.addDocument('en', 'Tell me about my marks', 'ct1_marks');
manager.addDocument('en', 'Can you provide my marks?', 'ct1_marks');
manager.addDocument('en', 'What’s my result in marks?', 'ct1_marks');
manager.addDocument('en', 'How did I score in my exams?', 'ct1_marks');
manager.addDocument('en', 'Can you show me my marks for the test?', 'ct1_marks');
manager.addDocument('en', 'What were my marks for this exam?', 'ct1_marks');
manager.addDocument('en', 'How many marks did I score?', 'ct1_marks');
manager.addDocument('en', 'Tell me my marks for this test', 'ct1_marks');
manager.addDocument('en', 'How did I do in terms of marks?', 'ct1_marks');
manager.addDocument('en', 'What marks did I get on the exam?', 'ct1_marks');
manager.addDocument('en', 'Can you show me my exam marks?', 'ct1_marks');
manager.addDocument('en', 'What marks did I get on the test?', 'ct1_marks');
manager.addDocument('en', 'Give me my marks for the test', 'ct1_marks');
manager.addDocument('en', 'What’s my score in marks?', 'ct1_marks');
manager.addDocument('en', 'How much did I score on the exam?', 'ct1_marks');
manager.addDocument('en', 'What are my marks in total?', 'ct1_marks');
manager.addDocument('en', 'How did I perform in terms of marks?', 'ct1_marks');
manager.addDocument('en', 'How much marks did I get?', 'ct1_marks');
manager.addDocument('en', 'Tell me the score in marks for my exam', 'ct1_marks');
manager.addDocument('en', 'How many marks did I get on my exam?', 'ct1_marks');
manager.addDocument('en', 'What was my performance in marks?', 'ct1_marks');
manager.addDocument('en', 'Can you provide me with my marks for the test?', 'ct1_marks');
manager.addDocument('en', 'Tell me about the marks I got', 'ct1_marks');
manager.addDocument('en', 'How did I do in marks?', 'ct1_marks');
manager.addDocument('en', 'Can you remind me of my marks?', 'ct1_marks');
manager.addDocument('en', 'Give me my marks for the exam', 'ct1_marks');
manager.addDocument('en', 'What were my exam marks?', 'ct1_marks');
manager.addDocument('en', 'How many total marks did I get?', 'ct1_marks');


    manager.addDocument('en', 'What are my CT2 marks?', 'ct2marks');
    manager.addDocument('en', 'How many marks did I get in CT2?', 'ct2marks');
    manager.addDocument('en', 'What is my CT2 result?', 'ct2marks');
    manager.addDocument('en', 'How much did I score in CT2?', 'ct2marks');
    manager.addDocument('en', 'What are my marks in CT2?', 'ct2marks');
    manager.addDocument('en', 'What’s my CT2 score?', 'ct2marks');
    manager.addDocument('en', 'Tell me my CT2 result', 'ct2marks');
    



manager.addDocument('en', 'Where do I live?', 'address');
manager.addDocument('en', 'What is my address?', 'address');
manager.addDocument('en', 'Can u tell me my address?', 'address');
manager.addDocument('en', 'What\'s my address?', 'address');
manager.addDocument('en', 'Whr is my house?', 'address');
manager.addDocument('en', 'Give me my address pls.', 'address');
manager.addDocument('en', 'Tell me my location.', 'address');
manager.addDocument('en', 'Where am I?', 'address');
manager.addDocument('en', 'Where’s my home?', 'address');
manager.addDocument('en', 'Where’s my add?', 'address');
manager.addDocument('en', 'Can you show my address?', 'address');
manager.addDocument('en', 'Plz show my address.', 'address');
manager.addDocument('en', 'I need my address.', 'address');
manager.addDocument('en', 'Where’s my office?', 'address');
manager.addDocument('en', 'What’s the address of my home?', 'address');
manager.addDocument('en', 'Tell me my residential address.', 'address');
manager.addDocument('en', 'Whre’s my office located?', 'address');
manager.addDocument('en', 'What’s my street address?', 'address');
manager.addDocument('en', 'Location of my house?', 'address');
manager.addDocument('en', 'Give me my workplace address.', 'address');
manager.addDocument('en', 'What is the address?', 'address');
manager.addDocument('en', 'What’s my current address?', 'address');
manager.addDocument('en', 'Where do I stay?', 'address');
manager.addDocument('en', 'I want my address.', 'address');
manager.addDocument('en', 'Where am I staying?', 'address');
manager.addDocument('en', 'What\'s my current location?', 'address');
manager.addDocument('en', 'Show my home address.', 'address');
manager.addDocument('en', 'Tell me my address plz.', 'address');
manager.addDocument('en', 'What’s the location of my house?', 'address');
manager.addDocument('en', 'Can you tell me my work address?', 'address');
manager.addDocument('en', 'Where’s my residence?', 'address');
manager.addDocument('en', 'Could u tell my home address?', 'address');
manager.addDocument('en', 'Show me my location.', 'address');
manager.addDocument('en', 'Tell me where I’m living.', 'address');
manager.addDocument('en', 'Plz tell my address.', 'address');
manager.addDocument('en', 'What is the address of my building?', 'address');
manager.addDocument('en', 'Whers my home?', 'address');
manager.addDocument('en', 'Location address pls?', 'address');
manager.addDocument('en', 'Plz share my home add.', 'address');
manager.addDocument('en', 'Where’s my apartment located?', 'address');
manager.addDocument('en', 'Where do I live atm?', 'address');
manager.addDocument('en', 'I need to know my address.', 'address');
manager.addDocument('en', 'Can you tell me my add?', 'address');
manager.addDocument('en', 'Whr’s my workplace?', 'address');
manager.addDocument('en', 'I need my residential info.', 'address');
manager.addDocument('en', 'Please show my add.', 'address');
manager.addDocument('en', 'Can u show my current location?', 'address');
manager.addDocument('en', 'Tell me my address now.', 'address');
manager.addDocument('en', 'Address of my house pls.', 'address');
manager.addDocument('en', 'My address pls.', 'address');
manager.addDocument('en', 'Where can I find my address?', 'address');
manager.addDocument('en', 'What\'s my address again?', 'address');
manager.addDocument('en', 'Give me my house add.', 'address');
manager.addDocument('en', 'Where do I live atm?', 'address');
manager.addDocument('en', 'What is the street of my house?', 'address');
manager.addDocument('en', 'Where’s my place of stay?', 'address');
manager.addDocument('en', 'Where’s my location at?', 'address');
manager.addDocument('en', 'Could you tell me my address?', 'address');
manager.addDocument('en', 'What’s my building address?', 'address');
manager.addDocument('en', 'Where’s my house located?', 'address');
manager.addDocument('en',"i live in",'address');



    manager.addDocument('en', 'What is my attendance?', 'attendance');
    manager.addDocument('en', 'How much attendance do I have?', 'attendance');
    manager.addDocument('en', 'Can you tell me my attendance?', 'attendance');
    manager.addDocument('en', 'What’s my attendance percentage?', 'attendance');
    manager.addDocument('en', 'What is the percentage of my attendance?', 'attendance');
    manager.addDocument('en', 'Tell me about my attendance', 'attendance');
    manager.addDocument('en', 'Can you provide my attendance details?', 'attendance');
    manager.addDocument('en', 'How many days have I attended so far?', 'attendance');
    manager.addDocument('en', 'How many days have I been present?', 'attendance');
    manager.addDocument('en', 'How many days have I missed?', 'attendance');
    manager.addDocument('en', 'What’s the status of my attendance?', 'attendance');
    manager.addDocument('en', 'How is my attendance looking?', 'attendance');
    manager.addDocument('en', 'What’s my overall attendance rate?', 'attendance');
    manager.addDocument('en', 'How many days have I attended this semester?', 'attendance');
    manager.addDocument('en', 'Tell me my attendance percentage so far', 'attendance');
    manager.addDocument('en', 'Can you update me about my attendance?', 'attendance');
    manager.addDocument('en', 'How many classes have I missed?', 'attendance');
    manager.addDocument('en', 'What’s my current attendance status?', 'attendance');
    manager.addDocument('en', 'How’s my attendance this month?', 'attendance');
    manager.addDocument('en', 'How many total classes have I attended?', 'attendance');
    manager.addDocument('en', 'Tell me my class attendance', 'attendance');
    manager.addDocument('en', 'How many lectures have I missed?', 'attendance');
    manager.addDocument('en', 'Give me my attendance update', 'attendance');
    manager.addDocument('en', 'How many classes did I attend this week?', 'attendance');
    manager.addDocument('en', 'Can you tell me my current attendance?', 'attendance');
    manager.addDocument('en', 'Can you share my attendance progress?', 'attendance');
    manager.addDocument('en', 'What’s my class attendance rate?', 'attendance');
    manager.addDocument('en', 'How much attendance have I gained?', 'attendance');
    manager.addDocument('en', 'What’s my attendance for the current term?', 'attendance');
    manager.addDocument('en', 'How’s my attendance looking for this term?', 'attendance');
    manager.addDocument('en', 'What’s my attendance in this subject?', 'attendance');
    manager.addDocument('en', 'How much attendance do I have in this course?', 'attendance');
    manager.addDocument('en', 'Tell me my attendance report', 'attendance');
    manager.addDocument('en', 'What’s my attendance record?', 'attendance');
    manager.addDocument('en', 'How many days have I been absent?', 'attendance');
    manager.addDocument('en', 'How often do I attend class?', 'attendance');
    manager.addDocument('en', 'What’s my attendance today?', 'attendance');
    manager.addDocument('en', 'Have I attended class today?', 'attendance');
    manager.addDocument('en', 'How many classes have I attended this month?', 'attendance');
    manager.addDocument('en', 'Can you share my attendance percentage for this semester?', 'attendance');
    manager.addDocument('en', 'What’s my attendance percentage this semester?', 'attendance');
    manager.addDocument('en', 'How is my attendance record looking this year?', 'attendance');
    manager.addDocument('en', 'How many days of classes did I attend this week?', 'attendance');
    manager.addDocument('en', 'What’s my current attendance score?', 'attendance');
    manager.addDocument('en', 'How’s my overall attendance progress?', 'attendance');
    manager.addDocument('en', 'What’s my class attendance for this term?', 'attendance');
    manager.addDocument('en', 'How many days have I attended in total?', 'attendance');
    manager.addDocument('en', 'How many days have I missed in this semester?', 'attendance');
    manager.addDocument('en', 'Can you tell me how many days I missed this semester?', 'attendance');
    manager.addDocument('en', 'How’s my attendance performance?', 'attendance');
    manager.addDocument('en', 'What’s the percentage of classes I’ve missed?', 'attendance');
    manager.addDocument('en', 'Tell me how my attendance looks for this term', 'attendance');
    manager.addDocument('en', 'Can you check my attendance for this term?', 'attendance');
    manager.addDocument('en', 'How much of the course have I missed in attendance?', 'attendance');
    manager.addDocument('en', 'How many times have I been absent?', 'attendance');
    manager.addDocument('en', 'What’s my attendance status for today?', 'attendance');
    manager.addDocument('en', 'Can you update me on my class attendance?', 'attendance');
    manager.addDocument('en', 'How many classes have I missed this semester?', 'attendance');
    manager.addDocument('en', 'Tell me my attendance this semester', 'attendance');
    manager.addDocument('en', 'How is my class attendance going?', 'attendance');
    manager.addDocument('en', 'Have I missed any classes this month?', 'attendance');
    manager.addDocument('en', 'Can you show me my attendance for today?', 'attendance');
    manager.addDocument('en', 'What’s my attendance status for this semester?', 'attendance');
    manager.addDocument('en', 'Tell me how many classes I’ve attended this term', 'attendance');
    manager.addDocument('en', 'How much time have I missed from the classes?', 'attendance');
    manager.addDocument('en', 'Can you show my attendance score for this semester?', 'attendance');
    manager.addDocument('en', 'How is my attendance record looking right now?', 'attendance');
    manager.addDocument('en', 'How many times did I attend class last month?', 'attendance');
    manager.addDocument('en', 'Tell me how many days I missed in this course?', 'attendance');
    manager.addDocument('en', 'What’s my overall attendance rate this semester?', 'attendance');
    manager.addDocument('en', 'How much of the semester have I missed in attendance?', 'attendance');
    manager.addDocument('en', 'What is my attendance this year?', 'attendance');
    manager.addDocument('en', 'Can you give me my attendance report for this term?', 'attendance');
    manager.addDocument('en', 'Tell me my attendance status this term', 'attendance');
    manager.addDocument('en', 'How many lectures did I attend this semester?', 'attendance');
    manager.addDocument('en', 'Can you update me on how many days I missed?', 'attendance');
    manager.addDocument('en', 'How many days have I been present in total?', 'attendance');
    manager.addDocument('en', 'How many classes have I missed this year?', 'attendance');
    manager.addDocument('en', 'How much time have I spent attending class this term?', 'attendance');
    manager.addDocument('en', 'What’s my overall attendance status this year?', 'attendance');
    manager.addDocument('en', 'What is my attendance attendance percentage?', 'attendance');
    manager.addDocument('en', 'Tell me my attendance data for this semester', 'attendance');
    manager.addDocument('en', 'How’s my attendance looking right now?', 'attendance');
    manager.addDocument('en', 'Tell me how many classes I missed this semester', 'attendance');
    manager.addDocument('en', 'Can you show me my attendance rate for this semester?', 'attendance');
    manager.addDocument('en', 'How many days have I attended the classes?', 'attendance');
    manager.addDocument('en', 'How much attendance do I need to improve?', 'attendance');
    manager.addDocument('en', 'What’s my attendance for the current month?', 'attendance');
    manager.addDocument('en', 'How many days of class did I miss last week?', 'attendance');
    manager.addDocument('en', 'Tell me the number of classes I’ve attended', 'attendance');
    manager.addDocument('en', 'What’s my class attendance this semester?', 'attendance');
    manager.addDocument('en', 'How is my attendance across different classes?', 'attendance');
    manager.addDocument('en', 'Tell me my attendance performance across classes', 'attendance');
    manager.addDocument('en', 'How much of the year have I attended class?', 'attendance');
    manager.addDocument('en', 'What’s my attendance level for this term?', 'attendance');
    manager.addDocument('en', 'Tell me the total attendance I’ve achieved', 'attendance');
    manager.addDocument('en', 'How many classes have I attended so far this year?', 'attendance');
    manager.addDocument('en', 'Tell me my attendance progress for this term', 'attendance');
    manager.addDocument('en', 'What is my attend?', 'attendance');
    manager.addDocument('en', 'How much attend do I have?', 'attendance');
    manager.addDocument('en', 'Can you tell me my attend?', 'attendance');
    manager.addDocument('en', 'What’s my attend percentage?', 'attendance');
    manager.addDocument('en', 'What is the percentage of my attend?', 'attendance');
    manager.addDocument('en', 'Tell me about my attend', 'attendance');
    manager.addDocument('en', 'Can you provide my attend details?', 'attendance');
    manager.addDocument('en', 'How many days have I attended so far?', 'attendance');
    manager.addDocument('en', 'How many days have I been present for attend?', 'attendance');
    manager.addDocument('en', 'How many days have I missed in attend?', 'attendance');
    manager.addDocument('en', 'What’s the status of my attend?', 'attendance');
    manager.addDocument('en', 'How is my attend looking?', 'attendance');
    manager.addDocument('en', 'What’s my overall attend rate?', 'attendance');
    manager.addDocument('en', 'How many days have I attended this term in attend?', 'attendance');
    manager.addDocument('en', 'Tell me my attend percentage so far', 'attendance');
    manager.addDocument('en', 'Can you update me about my attend?', 'attendance');
    manager.addDocument('en', 'How many classes have I missed in attend?', 'attendance');
    manager.addDocument('en', 'What’s my current attend status?', 'attendance');
    manager.addDocument('en', 'How’s my attend this month?', 'attendance');
    manager.addDocument('en', 'How many total classes have I attended in attend?', 'attendance');
    manager.addDocument('en', 'Tell me my class attend', 'attendance');
    manager.addDocument('en', 'How many lectures have I missed in attend?', 'attendance');
    manager.addDocument('en', 'Give me my attend update', 'attendance');
    manager.addDocument('en', 'How many classes did I attend this week?', 'attendance');
    manager.addDocument('en', 'Can you tell me my current attend?', 'attendance');
    manager.addDocument('en', 'Can you share my attend progress?', 'attendance');
    manager.addDocument('en', 'What’s my class attend rate?', 'attendance');
    manager.addDocument('en', 'How much attend have I gained?', 'attendance');
    manager.addDocument('en', 'What’s my attend for the current term?', 'attendance');
    manager.addDocument('en', 'How’s my attend looking for this term?', 'attendance');
    manager.addDocument('en', 'What’s my attend in this subject?', 'attendance');
    manager.addDocument('en', 'How much attend do I have in this course?', 'attendance');
    manager.addDocument('en', 'Tell me my attend report', 'attendance');
    manager.addDocument('en', 'What’s my attend record?', 'attendance');
    manager.addDocument('en', 'How many days have I been absent in attend?', 'attendance');
    manager.addDocument('en', 'How often do I attend class for attend?', 'attendance');
    manager.addDocument('en', 'What’s my attend today?', 'attendance');
    manager.addDocument('en', 'Have I attended class today for attend?', 'attendance');
    manager.addDocument('en', 'How many classes have I attended this month in attend?', 'attendance');
    manager.addDocument('en', 'Can you share my attend percentage for this semester?', 'attendance');
    manager.addDocument('en', 'What’s my attend percentage this semester?', 'attendance');
    manager.addDocument('en', 'How is my attend record looking this year?', 'attendance');
    manager.addDocument('en', 'How many days of classes did I attend this week in attend?', 'attendance');
    manager.addDocument('en', 'What’s my current attend score?', 'attendance');
    manager.addDocument('en', 'How’s my overall attend progress?', 'attendance');
    manager.addDocument('en', 'What’s my class attend for this term?', 'attendance');
    manager.addDocument('en', 'How many days have I attended in total in attend?', 'attendance');
    manager.addDocument('en', 'How many days have I missed in this semester for attend?', 'attendance');
    manager.addDocument('en', 'Can you tell me how many days I missed this semester for attend?', 'attendance');
    manager.addDocument('en', 'How’s my attend performance?', 'attendance');
    manager.addDocument('en', 'What’s the percentage of classes I’ve missed in attend?', 'attendance');
    manager.addDocument('en', 'Tell me how my attend looks for this term', 'attendance');
    manager.addDocument('en', 'Can you check my attend for this term?', 'attendance');
    manager.addDocument('en', 'How much of the course have I missed in attend?', 'attendance');
    manager.addDocument('en', 'How many times have I been absent in attend?', 'attendance');
    manager.addDocument('en', 'What’s my attend status for today?', 'attendance');
    manager.addDocument('en', 'Can you update me on my class attend?', 'attendance');
    manager.addDocument('en', 'How many classes have I missed this semester in attend?', 'attendance');
    manager.addDocument('en', 'Tell me my attend this semester', 'attendance');
    manager.addDocument('en', 'How is my class attend going?', 'attendance');
    manager.addDocument('en', 'Have I missed any classes this month for attend?', 'attendance');
    manager.addDocument('en', 'Can you show me my attend for today?', 'attendance');
    manager.addDocument('en', 'What’s my attend status for this semester?', 'attendance');
    manager.addDocument('en', 'Tell me how many classes I’ve attended this term in attend', 'attendance');
    manager.addDocument('en', 'How much time have I missed from the classes for attend?', 'attendance');
    manager.addDocument('en', 'Can you show my attend score for this semester?', 'attendance');
    manager.addDocument('en', 'How is my attend record looking right now?', 'attendance');
    manager.addDocument('en', 'How many times did I attend class last month for attend?', 'attendance');
    manager.addDocument('en', 'Tell me how many days I missed in this course for attend?', 'attendance');
    manager.addDocument('en', 'What’s my overall attend rate this semester?', 'attendance');
    manager.addDocument('en', 'How much of the semester have I missed in attend?', 'attendance');
    manager.addDocument('en', 'What is my attend this year?', 'attendance');
    manager.addDocument('en', 'Can you give me my attend report for this term?', 'attendance');
    manager.addDocument('en', 'Tell me my attend status this term', 'attendance');
    manager.addDocument('en', 'How many lectures did I attend this semester in attend?', 'attendance');
    manager.addDocument('en', 'Can you update me on how many days I missed in attend?', 'attendance');
    manager.addDocument('en', 'How many days have I been present in total in attend?', 'attendance');
    manager.addDocument('en', 'How many classes have I missed this year in attend?', 'attendance');
    manager.addDocument('en', 'How much time have I spent attending class this term in attend?', 'attendance');
    manager.addDocument('en', 'What’s my overall attend status this year?', 'attendance');
    manager.addDocument('en', 'What is my attend attendance percentage?', 'attendance');
    manager.addDocument('en', 'Tell me my attend data for this semester', 'attendance');
    manager.addDocument('en', 'How’s my attend looking right now?', 'attendance');
    manager.addDocument('en', 'Tell me how many classes I missed this semester in attend', 'attendance');
    manager.addDocument('en', 'Can you show me my attend rate for this semester?', 'attendance');
    manager.addDocument('en', 'How many days have I attended the classes for attend?', 'attendance');
    manager.addDocument('en', 'How much attend do I need to improve in attend?', 'attendance');
    manager.addDocument('en', 'What’s my attend for the current month in attend?', 'attendance');
    manager.addDocument('en', 'How many days of class did I miss last week in attend?', 'attendance');
    manager.addDocument('en', 'Tell me the number of classes I’ve attended in attend', 'attendance');
    manager.addDocument('en', 'What’s my class attend this semester in attend?', 'attendance');
    manager.addDocument('en', 'How is my attend across different classes?', 'attendance');
    manager.addDocument('en', 'Tell me my attend performance across classes', 'attendance');
    manager.addDocument('en', 'How much of the year have I attended class in attend?', 'attendance');
    manager.addDocument('en', 'What’s my attend level for this term?', 'attendance');
    manager.addDocument('en', 'Tell me the total attend I’ve achieved', 'attendance');
    manager.addDocument('en', 'How many classes have I attended so far this year in attend?', 'attendance');
    manager.addDocument('en', 'Tell me my attend progress for this term', 'attendance');
    




manager.addDocument('en', 'Hello', 'greeting');
manager.addDocument('en', 'Hi', 'greeting');
manager.addDocument('en', 'Hey there', 'greeting');
manager.addDocument('en', 'Good morning', 'greeting');
manager.addDocument('en', 'Good afternoon', 'greeting');
manager.addDocument('en', 'Good evening', 'greeting');
manager.addDocument('en', 'What’s up?', 'greeting');
manager.addDocument('en', 'Hey', 'greeting');
manager.addDocument('en', 'How are you?', 'greeting');
manager.addDocument('en', 'How’s it going?', 'greeting');
manager.addDocument('en', 'How do you do?', 'greeting');
manager.addDocument('en', 'Hello there', 'greeting');
manager.addDocument('en', 'What’s good?', 'greeting');
manager.addDocument('en', 'Hey, how’s it going?', 'greeting');
manager.addDocument('en', 'Greetings', 'greeting');
manager.addDocument('en', 'What’s up, chatbot?', 'greeting');
manager.addDocument('en', 'Hey, how are you doing?', 'greeting');
manager.addDocument('en', 'Yo', 'greeting');
manager.addDocument('en', 'Howdy', 'greeting');
manager.addDocument('en', 'Hi there', 'greeting');
manager.addDocument('en', 'What’s new?', 'greeting');
manager.addDocument('en', 'What’s happening?', 'greeting');
manager.addDocument('en', 'Hey, what’s up?', 'greeting');
manager.addDocument('en', 'Good to see you', 'greeting');
manager.addDocument('en', 'Nice to meet you', 'greeting');
manager.addDocument('en', 'How’s everything?', 'greeting');
manager.addDocument('en', 'Good day', 'greeting');
manager.addDocument('en', 'What’s going on?', 'greeting');
manager.addDocument('en', 'What’s the good word?', 'greeting');
manager.addDocument('en', 'Nice to chat with you', 'greeting');
manager.addDocument('en', 'Hello there, how are you?', 'greeting');
manager.addDocument('en', 'Hi, how’s your day?', 'greeting');
manager.addDocument('en', 'Yo, what’s up?', 'greeting');
manager.addDocument('en', 'Hey, how’s your day been?', 'greeting');
manager.addDocument('en', 'Hi! How are you doing today?', 'greeting');
manager.addDocument('en', 'How have you been?', 'greeting');
manager.addDocument('en', 'What’s up, how are you?', 'greeting');
manager.addDocument('en', 'Yo, how’s life?', 'greeting');
manager.addDocument('en', 'Hello! How’s your day going?', 'greeting');
manager.addDocument('en', 'What’s happening today?', 'greeting');
manager.addDocument('en', 'Hey, what’s new with you?', 'greeting');
manager.addDocument('en', 'Greetings, how’s everything?', 'greeting');
manager.addDocument('en', 'How’s your day so far?', 'greeting');
manager.addDocument('en', 'Hi, what’s new?', 'greeting');
manager.addDocument('en', 'What’s cracking?', 'greeting');
manager.addDocument('en', 'Hello! What’s new?', 'greeting');
manager.addDocument('en', 'Good morning, how are you?', 'greeting');
manager.addDocument('en', 'Hey, how’s it going today?', 'greeting');
manager.addDocument('en', 'Hi, what are you up to?', 'greeting');
manager.addDocument('en', 'Yo, what’s going on today?', 'greeting');
manager.addDocument('en', 'Good day, how are things?', 'greeting');
manager.addDocument('en', 'What’s the vibe?', 'greeting');
manager.addDocument('en', 'Hello! How’s everything going?', 'greeting');
manager.addDocument('en', 'Hey there, what’s happening?', 'greeting');
manager.addDocument('en', 'Hi! How are you feeling today?', 'greeting');
manager.addDocument('en', 'How are you today?', 'greeting');
manager.addDocument('en', 'Hey, what’s going on?', 'greeting');
manager.addDocument('en', 'What’s good today?', 'greeting');






// manager.addDocument('en', 'What is the minimum attendance required?', 'min_attendance');
// manager.addDocument('en', 'What is the attendance threshold?', 'min_attendance');






manager.addDocument('en', 'How old am I?', 'age');
manager.addDocument('en', 'Can you tell me how old I am?', 'age');
manager.addDocument('en', 'What is my age?', 'age');
manager.addDocument('en', 'How old will I be in 10 years?', 'age');
manager.addDocument('en', 'How old will I be in 2025?', 'age');
manager.addDocument('en', 'What age am I?', 'age');





    manager.addAnswer('en', 'name', 'Your name is John Doe.');
    manager.addAnswer('en', 'dob', 'Your date of birth is 1st January 2000.');
    manager.addAnswer('en', 'ct1_marks', 'Your CT1 marks are 85.');
    manager.addAnswer('en', 'age', 'You are 24 years old.');
    manager.addAnswer('en', 'ct2marks', 'CT2 marks have not happened yet.');
    manager.addAnswer('en', 'attendance', 'Your attendance is 80%.');
    manager.addAnswer('en', 'greeting', 'Not much, what about you');


manager.addAnswer('en', 'ct2marks', 'CT2 marks have not happened yet.');


    await manager.train();
    manager.save();

}
    async function processes(userQuery){

    const response = await manager.process('en', userQuery);

    
    return(response.intent)
}
    module.exports={initializeNlp,processes}