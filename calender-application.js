


const events=[
    { 
        title:'reunion party',
        date: new Date('11-2-2023'),
        location:'Eastleigh',
        attendees:[
            {
                name:'Ismail',
        
            },
            {
                name:' Mohamed'
            },
            {
                name:'yussuf'
            }
        ]

    },
    { 
        title:'graduation ceremony',
        date: new Date('11-6-2023'),
        location:'Chiromo',
        attendees:[
            {
                name:'Haji',
        
            },
            {
                name:' Adam'
            },
            {
                name:'Abdirahman'
            }
        ]

    },
    { 
        title:'entertainment',
        date: new Date('5-5-2023'),
        location:'Westlands',
        attendees:[
            {
                name:'Wardi',
        
            },
            {
                name:' Wali'
            },
            {
                name:'Ahmed'
            }
        ]

    }

];

//console.log(events[0].attendees[0]);

//destructuring each event

console.log('....EVENT.......' +'....................DATE..............................' + '..........LOCATION.......................');


for(let {title,date,location} of events){


    console.log(`  ${title} ......... ${date}...............  ${location} `)
}




//using a function change  the event array to a json string

console.log('----------------------------------------------------')



function eventToJson(events){

  return  JSON.stringify(events);

}

let jsonString=eventToJson([events]);

console.log(jsonString)




function addAttendee(eventTitle, attendeeName){

   let  eventTitles=events.map((item)=>{ return item.title})

 //  console.log(eventTitles[0]);



   eventsAttendees =events[0].attendees;
   //console.log(eventsAttendees);
if(eventTitles[1]==eventTitle){
   eventsAttendees.push({name:attendeeName});
  // console.log(eventsAttendees);
    
}
    
}

addAttendee('graduation ceremony', 'Simon');

console.log('-------------------------------------------------------------');



// for each function

events.forEach((item)=>{

    let title=item.title;
    let date=item.date;

    console.log(`${title}                           ${date}`);
})



//object.keys , object.values , object.entries


console.log(' ............................................................------');
console.log(' this shows they key for properties:')
console.log(Object.keys(events[0]));

console.log(' this shows the values:')
console.log(Object.values(events[0]));

console.log(' this shows an array containing key-value pairs of an object:')
console.log(Object.entries(events[0]));






