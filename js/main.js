var horoscopesAndDescriptions = [
{
	horoscope: "Cancer",
	description: "Your best attributes are being awesome! always having a blast! and always making sure your loved ones are taken care of.",
	image: "../img/cancer.png"
},
{
	horoscope: "Leo",
	description: "Your best attributes include ruling the jungle, generous tendencies, loyalty, love and care, initiative.",
	image: "../img/leo.png"
},
{
	horoscope: "Capricorn",
	description: "Your best attributes are: Determination, Dominance, Perservering, Practical, Willful",
	image: "../img/Capricorn.png"
},
{
	horoscope: "Gemini",
	description: "You're best attributes are: Communication, Indecision, Inquisitive, Intelligent, Changeable",
	image: "../img/gemini.png"
},
{
	horoscope: "Sagittarius",
	description: "Your best attributes are: Philosophical, Motion, Experimentation, Optimism",
	image: "../img/sagittarius.png"
},
{
	horoscope: "Aries",
	description: "Your best attributes are: Active, Demanding, Determined, Effective, Ambitious",
	image: "../img/aries.png"
},
{
	horoscope: "Taurus",
	description: "Your best attributes are: Security, Subtle strength, Appreciation, Instruction, Patience",
	image: "../img/taurus.png"
},
{
	horoscope: "Aquarius",
	description: "Your best attributes are: Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
	image: "../img/aquarius.png"
},
{
	horoscope: "Libra",
	description: "Your best attributes are: Balance, Justice, Truth, Beauty, Perfection",
	image: "../img/libra.png"
},
{
	horoscope: "Scorpio",
	description: "You're best attributes are: Transient, Self-Willed, Purposeful, Unyielding",
	image: "../img/scorpio.png"
},
{
	horoscope: "Virgo",
	description: "You're best attributes are: Analyzing, Practical, Reflective, Observation, Thoughtful",
	image: "../img/virgo.png"
},
{
	horoscope: "Pisces",
	description: "You're best attributes are: Fluctuation, Depth, Imagination, Reactive, Indecisive",
	image: "../img/pisces.png"

}
]

function horoscope() {
	var horoscope = document.getElementById("horoscope").value.toLowerCase()
	

	for(i = 0; i < horoscopesAndDescriptions.length; i++){
		if(horoscope === horoscopesAndDescriptions[i].horoscope){
			document.getElementById("yourZodiac").innerHTML = horoscopesAndDescriptions[i].horoscope
			document.getElementById("zodiacImg").src = horoscopesAndDescriptions[i].image
			document.getElementById("yourHoroscope").innerHTML = horoscopesAndDescriptions.description
		return
		} else {
			document.getElementById("yourZodiac").innerHTML = "Please enter a Zodiac animal!!"
		}
	}
}







