// Base Url
const BASE_URL = 'https://api.rawg.io/api/'

// Current Month
const getCurrentMonth =()=>{
    const month = new Date().getMonth()+1
    if(month<10){
        return `0${month}`
    }else{
        return month
    }
}

// Current Day
const getCurrentDay =()=>{
    const day = new Date().getDate()
    if(day<10){
        return `0${day}`
    }else{
        return day
    }
}

// Current Day/Month/Year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`

// Popular Games

const POP_GAMES = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`

export const popularGamesUrl = ()=> `${BASE_URL}${POP_GAMES}`

// Upcoming games
const UPCOMING_GAMES = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`

export const upcomingGamesUrl = () => `${BASE_URL}${UPCOMING_GAMES}`

// New Games
const NEW_GAMES = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const newGamesUrl = () => `${BASE_URL}${NEW_GAMES}`





