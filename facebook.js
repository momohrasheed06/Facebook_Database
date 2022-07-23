
let database = [
    {
        name: "Isah",
        password: "256"
    },
    {
        name: "Ayo",
        password: "ayomidate"
    },
    {
        name: "Joy",
        password: "faithful"
    },
    {
        name: "Harun",
        password: "harun28"
    },
    {
        name: "Dave",
        password: "davidkimo"
    },
    {
        name: "Yemisi",
        password: "misi"
    },
    {
        name: "Karim",
        password: "kareem"
    },
    {
        name: "Maryam",
        password: "innah"
    },
    {
        name: "Gabby",
        password: "vikgabby"
    },
    {
        name: "Samantha",
        password: "santa123"
    }
];

let newsfeed = [
    {
        name: "Isah",
        timeline: "Who's awake!"
    },
    {
        name: "Ayo",
        timeline: "who's online"
    },
    {
        name: "Joy",
        timeline: "I'm joyful"
    },
    {
        name: "Harun",
        timeline: "Who wants to play imessage games?"
    },
    {
        name: "Dave",
        timeline: "I killed Goliath, don't mess with me"
    },
    {
        name: "Yemisi",
        timeline: "I'm new here, show me around"
    },
    {
        name: "Karim",
        timeline: "Hello world!"
    },
    {
        name: "Maryam",
        timeline: "I like to cook"
    },
    {
        name: "Gabby",
        timeline: "Join us in our cruise ship"
    },
    {
        name: "Samantha",
        timeline: "I'm heartbroken"
    }
];

let usern = document.getElementById("use")
usern.addEventListener("keypress", function(event)
{
    if (event.key === "Enter"){
        if(usern.value !== ""){

        }
    }
});

let passw = document.getElementById("pas")
passw.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        if(passw.value !== ""){
        }
    }
});

let but= document.getElementById("signup")
but.addEventListener("click", signin)
function validuser(name, password){
    for(let i = 0; i<database.length; i++){
        if(database[i].name === usern.value && database[i].password === passw.value){
            return true;
        }
    }
    return false;
}


function signin(name, password){
    
    if(validuser(name, password)===true){
        for(let b = 0; b<newsfeed.length; b++) {
        if(usern.value === newsfeed[b].name)   
            {
            
            alert(newsfeed[b].timeline)
                 break;}
            }
            alert("Login successfully!")
        }
         
        else{
        alert("data not found");
    }
        };



