
var myUniqueIdSet = new Set();
var UniqueIdArray;

var scenes = 
[
{
    label: 'Scene 1',
    id: 'ep02_scn0015',
    source: 'video-samples/cat.mp4',
    characters: 
    [
        {
            character_id: '0001',
            name: 'Jack',
            emotion: 'Angry',
            action: 'Fighting'
        },
        {
            character_id: '0002',
            name: 'John',
            emotion: 'Happy',
            action: 'Watching'
        }

    ],
    location: 'Home',
    time: 'Night'
},

{
    label: 'Scene 2',
    id: 'ep02_scn0075',
    source: 'video-samples/cat1.mp4',
    characters: 
    [
        {
            character_id: '0003',
            name: 'Ms.Min',
            emotion: 'Sad',
            action: 'Crying'
        },
        {
            character_id: '0004',
            name: 'Father',
            emotion: 'Neutral',
            action: 'Talking'
        },
        {
            character_id: '0005',
            name: 'Friend',
            emotion: 'Disgusted',
            action: 'Talking'
        }

    ],
    location: 'Restaurant',
    time: 'Evening'
},

{
    label: 'Scene 3',
    id: 'ep02_scn002',
    source: 'video-samples/cat2.mp4',
    characters: 
    [
        {
            character_id: '0003',
            name: 'Ms.Min',
            emotion: 'Fear',
            action: 'Walking'
        }

    ],
    location: 'Restaurant',
    time: 'Day'
},

{
    label: 'Scene 4',
    id: 'ep02_scn0016',
    source: 'video-samples/cat.mp4',
    characters: 
    [
        {
            character_id: '0001',
            name: 'Jack',
            emotion: 'Angry',
            action: 'Fighting'
        },
        {
            character_id: '0002',
            name: 'John',
            emotion: 'Happy',
            action: 'Talking'
        }

    ],
    location: 'Home',
    time: 'Night'
},

{
    label: 'Scene 5',
    id: 'ep02_scn00778',
    source: 'video-samples/cat1.mp4',
    characters: 
    [
        {
            character_id: '0003',
            name: 'Ms.Min',
            emotion: 'Sad',
            action: 'Crying'
        },
        {
            character_id: '0004',
            name: 'Father',
            emotion: 'Neutral',
            action: 'Talking'
        },
        {
            character_id: '0005',
            name: 'Friend',
            emotion: 'Disgusted',
            action: 'Laughing'
        }

    ],
    location: 'Restaurant',
    time: 'Evening'
},

{
    label: 'Scene 6',
    id: 'ep02_scn0055',
    source: 'video-samples/cat2.mp4',
    characters: 
    [
        {
            character_id: '0003',
            name: 'Ms.Min',
            emotion: 'Fear',
            action: 'Walking'
        }

    ],
    location: 'Restaurant',
    time: 'Day'
}
]


function charactersArray() {

    
  
    for (var i = 0; i < Object.keys(scenes).length; i++)
    {
        for(var j = 0; j < Object.keys(scenes[i].characters).length; j++)
            myUniqueIdSet.add(scenes[i].characters[j].character_id);
            
    }   
    
     UniqueIdArray = Array.from(myUniqueIdSet);
    
}


function findCharacterName(characterID) {

    

    for (var i = 0; i < Object.keys(scenes).length; i++)
    {
        for(var j = 0; j < Object.keys(scenes[i].characters).length; j++)
            if(scenes[i].characters[j].character_id == characterID){
               return scenes[i].characters[j].name;
            }

            
    }  
    return 'No Character With Such ID ';   
    
}

function emotionSelector(emotionString) {

    switch (emotionString) {
        case 'Happy':
            return 'emojis/happy.webp';
        case 'Neutral':
            return 'emojis/neutral.webp';
        case 'Sad':
            return 'emojis/sad.webp';
        case 'Disgusted':
            return 'emojis/disgusted.webp';
        case 'Fear':
            return 'emojis/fear.webp';
        case 'Angry':
            return 'emojis/angry.webp';
        default: 
            return 'No Emotion';  
        }      

}

function emotionStringSelector(emotionDegreeArray) {

var emotionToString = [];

    for(var i=0; i < emotionDegreeArray.length; i++ )
    {
        switch (emotionDegreeArray[i]) {
        case 0:
            emotionToString.push('Happy');
            break;
        case 1:
            emotionToString.push('Neutral');
            break;
        case 2:
            emotionToString.push('Sad');
            break;
        case 3:
            emotionToString.push('Disgusted');
            break;
        case 4:
            emotionToString.push('Fear');
            break;
        case 5:
            emotionToString.push('Angry');
            break;
        default: 
            return emotionToString;  
        } 
    }

    return emotionToString;        

}


function timeStringSelector(timeDegreeArray) {

var timeToString = [];

    for(var i=0; i < timeDegreeArray.length; i++ )
    {
        switch (timeDegreeArray[i]) {
        case 0:
            timeToString.push('Night');
            break;
        case 1:
            timeToString.push('Day');
            break;
        default: 
            return timeToString;  
        } 
    }

    return timeToString;        

}

