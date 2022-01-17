import { v4 as uuidv4 } from 'uuid';
let speakers = [];

export const getSpeakers = (req,res) => {
    res.send(speakers);
}
export const createSpeaker = (req,res) => {
    
    const speaker = req.body;
    const speakerID = uuidv4(); 
    const speakerWithID = { ...speaker,id: speakerID}
  
    speakers.push(speakerWithID);
    res.send(`Speaker with the name ${speaker.firstName} has been added to our database`);
}
export const getSpeakerByID = (req,res) => {
    const { id } = req.params;

    const foundSpeaker = speakers.find((speaker) => speaker.id === id);
    res.send(foundSpeaker);
}
export const deleteSpeaker = (req,res) => {
    const { id } = req.params;
    speakers = speakers.filter((speaker) => speaker.id != id)
    res.send(`Speaker with the ID ${id} has been deleted`);
}
export const updateSpeaker = (req,res) => {

    const { id } = req.params;
    const { firstName, lastName, profession} = req.body;
    const speaker = speakers.find((speaker) => speaker.id === id);

    if(firstName) {
        speaker.firstName = firstName;
    }
    if(lastName) {
        speaker.lastName = lastName;
    }
    if(profession) {
        speaker.profession = profession;
    }
    res.send(`Speaker with the ID ${id} has been updated`);
}

