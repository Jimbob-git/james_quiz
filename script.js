function createCookie(name,pwds){
  let username = document.getElementById("user");
  let pwd = document.getElementById("pd");


  today = new Date();
  var expire = new Date();
  expire.setTime(today.getTime() + 3600000*24*15);
 

  document.cookie = "name="+username.value+";path=/" + ";expires="+expire.toUTCString();
  //can only write one entity at a time (name, pass)
}  


//event handler for page load - runs on every refresh
window.onload = function(){
	
	var uname = 'Route66';
	document.getElementById('user').value = uname;





// Questions will be asked

const questions = [
    
    {
        id: 0,
	q: "Q1. What is the name of the Queen's official Edinburgh residence?",
        a: [{ text: "Holyrood House", isCorrect: false },
            { text: "Holyrood Castle", isCorrect: false },
            { text: "Holyrood Palace", isCorrect: true },
            { text: "Edinburgh Castle", isCorrect: false }
        ]
  
    },	
	{
        id: 1,
        q: "Q2. London has six major airports, 5 of which are: Gatwick, Heathrow, Luton, Southend and Stanstead, name the sixth one?",
        a: [{ text: "London Palace", isCorrect: false },
            { text: "London House", isCorrect: false },
            { text: "London North Castle", isCorrect: false },
            { text: "London City", isCorrect: true }
        ]
  
    },
    {
        id: 2,
        q: "Q3. What is the name of the worlds biggest movie industry?",
        a: [{ text: "Hollywood", isCorrect: false },
            { text: "Mollywood", isCorrect: false },
            { text: "Bollywood", isCorrect: true },
            { text: "Malayalam", isCorrect: false }
        ]
  
    },
	{
        id: 3,
        q: "Q4. Singaporeans speak a special dialect of English which is known as what?",
        a: [{ text: "Singlish", isCorrect: true },
            { text: "Tamil", isCorrect: false },
            { text: "Cantonese", isCorrect: false },
            { text: "Mandarin", isCorrect: false }
        ]
  
    },
    {
        id: 4,
        q: "Q5. Bangkok is the capital city of which country?",
        a: [{ text: "Vietnam", isCorrect: false },
            { text: "Malaysia", isCorrect: false },
            { text: "Burma", isCorrect: false },
            { text: "Thailand", isCorrect: true }
        ]
  
    },
	{
        id: 5,
        q: "Q6. Phuket was hit by what on the 26th December 2004?",
        a: [{ text: "An earthquake", isCorrect: false },
            { text: "A hurricane", isCorrect: false },
            { text: "A tsunami", isCorrect: true },
            { text: "A volcanic eruption", isCorrect: false }
        ]
  
    },
    {
        id: 6,
        q: "Q7. What is the name of the Sydney bridge in the picture?",
        a: [{ text: "Balmain Bridge", isCorrect: false },
            { text: "Anzac Bridge", isCorrect: true },
            { text: "Sydney Harbour Bridge", isCorrect: false },
            { text: "Bondi Bridge", isCorrect: false }
        ]
  
    },
	{
        id: 7,
        q: "Q8. Melbourne is home to the Australian Formula One Grand Prix and what other international sporting event?",
        a: [{ text: "The Australian Open", isCorrect: true },
            { text: "The Oceania Rugby Tournament", isCorrect: false },
            { text: "The Australian Rules Football Final", isCorrect: false },
            { text: "South Australian Kangaroo Race", isCorrect: false }
        ]
  
    },
    {
        id: 8,
        q: "Q9. What is the capital city of New Zealand's South Island?",
        a: [{ text: "Christchurch", isCorrect: true },
            { text: "Wellington", isCorrect: false },
            { text: "Queenstown", isCorrect: false },
            { text: "Auckland", isCorrect: false }
        ]
  
    },
	{
        id: 9,
        q: "Q10. Fiji sits in which Ocean?",
        a: [{ text: "Atlantic Ocean", isCorrect: false },
            { text: "South Pacific Ocean", isCorrect: true },
            { text: "Indian Ocean", isCorrect: false },
            { text: "Arctic Ocean", isCorrect: false }
        ]
  
    },
    {
        id: 10,
        q: "Q11. Rarotonga is the largest island in the southern group of what islands?",
        a: [{ text: "Cook", isCorrect: true },
            { text: "Queen", isCorrect: false },
            { text: "Bahamas", isCorrect: false },
            { text: "Sandwich", isCorrect: false }
        ]
  
    },
	{
        id: 11,
        q: "Q12. The Hollywood sign in Los Angeles was originally built in 1923, however it had a longer name and was changed to Hollywood in 1949, what was the original name?",
        a: [{ text: "Hollywood Town", isCorrect: false },
            { text: "Movie Town", isCorrect: false },
            { text: "HollywoodMovieLand", isCorrect: false },
            { text: "HollywoodLand", isCorrect: true }
        ]
  
    },
    {
        id: 12,
        q: "Q13. What year was the great earthquake that shook San Francisco, measuring 7.9 on the richter scale?",
        a: [{ text: "1901", isCorrect: false },
            { text: "1906", isCorrect: true },
            { text: "1926", isCorrect: false },
            { text: "1856", isCorrect: false }
        ]
  
    }
  
]
  
// Set start
var start = true;
  
// Iterate
function iterate(id) {
  
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
    // Getting the question
    const question = document.getElementById("question");
  
  
    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
  
  
    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
  
    var selected = "";
  
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
  
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
  
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
  
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })
  
    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");
  
    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}
  
if (start) {
    iterate("0");
}
  
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
  
})