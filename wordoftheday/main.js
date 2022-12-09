var day = new Date().getDate();
var month = new Date().getMonth() + 1;
const wordsOfDecember =
["Superintendent",
"Injection",
"Dividend", 
"Contrary",
"Delinquency",
"Testify",
"Equiniox",
"Enfix",
"Viable",
"Implication", // 10
"Acquisition",
"Affinity",
"Autonomy",
"Coalition",
"Incongrous",
"Ommision",
"Conglomerate",
"Convulsion",
"Ambiguous",
"Relinquish", // 20
"Domestic",
"Contradiction",
"Agony",
"Fluctuation",
"Insistence",
"Reconcile",
"Linear",
"Tolerant",
"Compliance",
"Expenditure", // 30
"Legistation"
];

const meaningsOfDecember = [
"noun/ \n a person who manages or superintends an organization or activity.",
"noun/ \n 1. an instance of injecting or being injected. \n 2. the entry or placing of a spacecraft or other object into an orbit or trajectory.",
"noun/ \n a sum of money paid regularly (typically annually) by a company to its shareholders out of its profits (or reserves).",
"adj./ \n opposite in nature, direction, or meaning.",
"noun/ \n 1. minor crime \n 2. neglect of one's duty",
"verb/ \n give evidence as a witness in a law court.",
"noun/ \n where the sun crosses the celestial equator; when day and night are of approximately equal length",
"(OLD) verb/ \n to fasten or fix by piercing or thrusting in",
"adj./ \n capable of working successfully; feasible.",
"noun/ \n the conclusion that can be drawn from something although it is not explicitly stated.",
"noun/ \n 1. an asset or object bought or obtained \n 2. the learning or developing of a skill, habit, or quality.",
"noun/ \n a natural liking for and understanding of someone or something.",
"noun/ \n the right or condition of self-government.",
"noun/ \n a temporary alliance for combined action, especially of political parties forming a government.",
"adj./ \n not in harmony or keeping with the surroundings or other aspects of something.",
"noun/ \n a person or thing that has been left out or excluded.",
"noun/ \n a thing consisting of a number of different and distinct parts or items that are grouped together.",
"noun/ \n a sudden, violent, irregular movement of the body, caused by involuntary contraction of muscles; a spasm",
"adj./ \n open to more than one interpretation; not having one obvious meaning.",
"verb/ \n voluntarily cease to keep or claim; give up.",
"adj./ \n 1. relating to the running of a home or to family relations. \n 2. existing or occurring inside a particular country",
"noun/ \n a combination of statements, ideas, or features which are opposed to one another.",
"noun/ \n extreme physical or mental suffering.",
"noun/ \n an irregular rising and falling in number or amount; a variation.",
"noun/ \n the fact or quality of insisting that something is the case or should be done.",
"verb/ \n restore friendly relations between.",
"adj./ \n arranged in or extending along a straight or nearly straight line. \n Maths. able to be represented by a straight line on a graph.",
"adj./ \n showing willingness to allow the existence of opinions or behaviour that one does not necessarily agree with. (opp. intolerant)",
"noun/ \n the action or fact of complying or with a wish or command. (opp. defiance)",
"noun/ \n the action of spending funds; an amount of money spent",
"verb/ \n a law or a set of laws that have been passed [by the authority]"
]
var todaysMeaning = meaningsOfDecember[day-1];
var todaysWord = wordsOfDecember[day-1];
console.log(todaysWord);

function notifyMe() {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support notifications");
    }
    else if (Notification.permission === "granted") {
      // Check if notifs are allowed
      const notification = new Notification("Word Of The Day - " + day + "/" + month, {body: todaysWord + " " + todaysMeaning + "\n"});
      // Notif
    }
    else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // Create notif if granted
        if (permission === "granted") {
          const notification = new Notification("Word Of The Day - " + day + "/" + month, {body: todaysWord});
          // Notif
        }
      });
    }
}