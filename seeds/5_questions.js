
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      return knex('questions').insert([
              {
                 "question": "1. You are almost never late for your appointments",
                //  "answer": "YES   NO"
              },
              {
                 "question": "2. You like to be engaged in an active and fast-paced job",
                //  "answer": "YES   NO"
              },
              {
                 "question": "3. You enjoy having a wide circle of acquaintances",
                //  "answer": "YES   NO"
              },
              {
                 "question": "4. You feel involved when watching TV soaps",
                //  "answer": "YES   NO"
              },
              {
                 "question": "5. You are usually the first to react to a sudden event, such as the telephone ringing or unexpected question",
                //  "answer": "YES   NO"
              },
              {
                 "question": "6. You are more interested in a general idea than in the details of its realization",
                //  "answer": "YES   NO"
              },
              {
                 "question": "7. You tend to be unbiased even if this might endanger your good relations with people",
                //  "answer": "YES   NO"
              },
              {
                 "question": "8. Strict observance of the established rules is likely to prevent a good outcome",
                //  "answer": "YES   NO"
              },
              {
                 "question": "9. It's difficult to get you excited ",
                //  "answer": "YES   NO"
              },
              {
                 "question": "10. It is in your nature to assume responsibility",
                //  "answer": "YES   NO"
              },
              {
                 "question": "11. You often think about humankind and its destiny",
                //  "answer": "YES   NO"
              },
              {
                 "question": "12. You believe the best decision is one that can be easily changed",
                //  "answer": "YES   NO"
              },
              {
                 "question": "13. Objective criticism is always useful in any activity",
                //  "answer": "YES   NO"
              },
              {
                 "question": "14. You prefer to act immediately rather than speculate about various options",
                //  "answer": "YES   NO"
              },
              {
                 "question": "15. You trust reason rather than feelings",
                //  "answer": "YES   NO"
              },
              {
                 "question": "16. You are inclined to rely more on improvisation than on prior planning",
                //  "answer": "YES   NO"
              },
              {
                 "question": "17. You spend your leisure time actively socializing with a group of people, attending parties, shopping, etc.",
                //  "answer": "YES   NO"
              },
              {
                 "question": "18. You usually plan your actions in advance",
                //  "answer": "YES   NO"
              },
              {
                 "question": "19. Your actions are frequently influenced by emotions",
                //  "answer": "YES   NO"
              },
              {
                 "question": "20. You are a person somewhat reserved and distant in communication",
                //  "answer": "YES   NO"
              },
              {
                 "question": "21. You know how to put every minute of your time to good purpose",
                //  "answer": "YES   NO"
              },
              {
                 "question": "22. You readily help people while asking nothing in return",
                //  "answer": "YES   NO"
              },
              {
                 "question": "23. You often contemplate the complexity of life",
                //  "answer": "YES   NO"
              },
              {
                 "question": "24. After prolonged socializing you feel you need to get away and be alone",
                //  "answer": "YES   NO"
              },
              {
                 "question": "25. You often do jobs in a hurry",
                //  "answer": "YES   NO"
              },
              {
                 "question": "26. You easily see the general principle behind specific occurrences",
                //  "answer": "YES   NO"
              },
              {
                 "question": "27. You frequently and easily express your feelings and emotions",
                //  "answer": "YES   NO"
              },
              {
                 "question": "28. You find it difficult to speak loudly",
                //  "answer": "YES   NO"
              },
              {
                 "question": "29. You get bored if you have to read theoretical books",
                //  "answer": "YES   NO"
              },
              {
                 "question": "30. You tend to sympathize with other people",
                //  "answer": "YES   NO"
              },
              {
                 "question": "31. You value justice higher than mercy",
                //  "answer": "YES   NO"
              },
              {
                 "question": "32. You rapidly get involved in the social life of a new workplace",
                //  "answer": "YES   NO"
              },
              {
                 "question": "33. The more people with whom you speak, the better you feel",
                //  "answer": "YES   NO"
              },
              {
                 "question": "34. You tend to rely on your experience rather than on theoretical alternatives",
                //  "answer": "YES   NO"
              },
              {
                 "question": "35. You like to keep a check on how things are progressing",
                //  "answer": "YES   NO"
              },
              {
                 "question": "36. You easily empathize with the concerns of other people",
                //  "answer": "YES   NO"
              },
              {
                 "question": "37. You often prefer to read a book than go to a party",
                //  "answer": "YES   NO"
              },
              {
                 "question": "38. You enjoy being at the center of events in which other people are directly involved",
                //  "answer": "YES   NO"
              },
              {
                 "question": "39. You are more inclined to experiment than to follow familiar approaches",
                //  "answer": "YES   NO"
              },
              {
                 "question": "40. You avoid being bound by obligations",
                //  "answer": "YES   NO"
              },
              {
                 "question": "41. You are strongly touched by stories about people's troubles",
                //  "answer": "YES   NO"
              },
              {
                 "question": "42. Deadlines seem to you to be of relative, rather than absolute, importance",
                //  "answer": "YES   NO"
              },
              {
                 "question": "43. You prefer to isolate yourself from outside noises",
                //  "answer": "YES   NO"
              },
              {
                 "question": "44. It's essential for you to try things with your own hands",
                //  "answer": "YES   NO"
              },
              {
                 "question": "45. You think that almost everything can be analyzed",
                //  "answer": "YES   NO"
              },
              {
                 "question": "46. Failing to complete your task on time makes you rather uncomfortable",
                //  "answer": "YES   NO"
              },
              {
                 "question": "47. You take pleasure in putting things in order",
                //  "answer": "YES   NO"
              },
              {
                 "question": "48. You feel at ease in a crowd",
                //  "answer": "YES   NO"
              },
              {
                 "question": "49. You have good control over your desires and temptations",
                //  "answer": "YES   NO"
              },
              {
                 "question": "50. You easily understand new theoretical principles",
                //  "answer": "YES   NO"
              },
              {
                 "question": "51. The process of searching for a solution is more important to you than the solution itself",
                //  "answer": "YES   NO"
              },
              {
                 "question": "52. You usually place yourself nearer to the side than in the center of a room",
                //  "answer": "YES   NO"
              },
              {
                 "question": "53. When solving a problem you would rather follow a familiar approach than seek a new one",
                //  "answer": "YES   NO"
              },
              {
                 "question": "54. You try to stand firmly by your principles",
                //  "answer": "YES   NO"
              },
              {
                 "question": "55. A thirst for adventure is close to your heart",
                //  "answer": "YES   NO"
              },
              {
                 "question": "56. You prefer meeting in small groups over interaction with lots of people",
                //  "answer": "YES   NO"
              },
              {
                 "question": "57. When considering a situation you pay more attention to the current situation and less to a possible sequence of events",
                //  "answer": "YES   NO"
              },
              {
                 "question": "58. When solving a problem you consider the rational approach to be the best",
                //  "answer": "YES   NO"
              },
              {
                 "question": "59. You find it difficult to talk about your feelings",
                //  "answer": "YES   NO"
              },
              {
                 "question": "60. You often spend time thinking of how things could be improved",
                //  "answer": "YES   NO"
              },
              {
                 "question": "61. Your decisions are based more on the feelings of a moment than on the thorough planning",
                //  "answer": "YES   NO"
              },
              {
                 "question": "62. You prefer to spend your leisure time alone or relaxing in a tranquil atmosphere",
                //  "answer": "YES   NO"
              },
              {
                 "question": "63. You feel more comfortable sticking to conventional ways",
                //  "answer": "YES   NO"
              },
              {
                 "question": "64. You are easily affected by strong emotions",
                //  "answer": "YES   NO"
              },
              {
                 "question": "65. You are always looking for opportunities",
                //  "answer": "YES   NO"
              },
              {
                 "question": "66. Your desk, workbench, etc. is usually neat and orderly",
                //  "answer": "YES   NO"
              },
              {
                 "question": "67. As a rule, current preoccupations worry you more than your future plans",
                //  "answer": "YES   NO"
              },
              {
                 "question": "68. You get pleasure from solitary walks",
                //  "answer": "YES   NO"
              },
              {
                 "question": "69. It is easy for you to communicate in social situations",
                //  "answer": "YES   NO"
              },
              {
                 "question": "70. You are consistent in your habits",
                //  "answer": "YES   NO"
              },
              {
                 "question": "71. You willingly involve yourself in matters which engage your sympathies",
                //  "answer": "YES   NO"
              },
              {
                 "question": "72. You easily perceive various ways in which events could develop",
                //  "answer": "YES   NO"
              }
    ]);
    })
    .then(() => {
  return knex.raw("SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions))");
})
};
