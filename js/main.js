var horoscopes = [
{
	sign: "cancer",
	description: "Your best attributes are being awesome! always having a blast! and always making sure your loved ones are taken care of.",
	image: "img/cancer.png"
},
{
	sign: "leo",
	description: "Your best attributes include ruling the jungle, generous tendencies, loyalty, love and care, initiative.",
	image: "img/leo.png"
},
{
	sign: "capricorn",
	description: "Your best attributes are: Determination, Dominance, Perservering, Practical, Willful",
	image: "img/Capricorn.png"
},
{
	sign: "gemini",
	description: "You're best attributes are: Communication, Indecision, Inquisitive, Intelligent, Changeable",
	image: "img/gemini.png"
},
{
	sign: "sagittarius",
	description: "Your best attributes are: Philosophical, Motion, Experimentation, Optimism",
	image: "img/sagittarius.png"
},
{
	sign: "aries",
	description: "Your best attributes are: Active, Demanding, Determined, Effective, Ambitious",
	image: "img/aries.png"
},
{
	sign: "taurus",
	description: "Your best attributes are: Security, Subtle strength, Appreciation, Instruction, Patience",
	image: "img/taurus.png"
},
{
	sign: "aquarius",
	description: "Your best attributes are: Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
	image: "img/aquarius.png"
},
{
	sign: "libra",
	description: "Your best attributes are: Balance, Justice, Truth, Beauty, Perfection",
	image: "img/libra.png"
},
{
	sign: "scorpio",
	description: "You're best attributes are: Transient, Self-Willed, Purposeful, Unyielding",
	image: "img/scorpio.png"
},
{
	sign: "virgo",
	description: "You're best attributes are: Analyzing, Practical, Reflective, Observation, Thoughtful",
	image: "img/virgo.png"
},
{
	sign: "pisces",
	description: "You're best attributes are: Fluctuation, Depth, Imagination, Reactive, Indecisive",
	image: "img/pisces.png"

}
]

function getZodiac() {
  var user = document.getElementById("info").value.toLowerCase()
	

	for(i = 0; i < horoscopes.length; i++){
		if(user === horoscopes[i].sign){
			document.getElementById("yourZodiac").innerHTML = horoscopes[i].sign
			document.getElementById("zodiacImg").src = horoscopes[i].image
			document.getElementById("yourHoroscope").innerHTML = horoscopes[i].description
		return
		} else {
			document.getElementById("yourZodiac").innerHTML = "Please enter a Zodiac animal!!"
		}
	}
}







