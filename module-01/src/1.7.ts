
const mentor1={
    name:"adnan",
    age:20
}
const mentor2={
    name:"adnan rony",
    age:200,
    roll:300
}
const mentorlist={
    ...mentor1,
    ...mentor2
}

console.log(mentorlist)

// rest api


const allfriends=(...friends:string[])=>{
    // console.log(`hi my friends ${friends}`)
    friends.forEach((friend:String)=>{
        console.log(` hi ${friend}`)
    })
    // friends.map((friend:String)=>{
    //     console.log(` hii ${friend}`)
    // })
}

allfriends("abu","dabu","kabu")






