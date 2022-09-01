const fs = require ('fs');
const {filterByQuery,findById,newReminder,verifyNote} = require ('../lib/notetaker');
const notesArr = require('../db/db.json');

jest.mock('fs');

test('creates a new reminder', () => {
    const reminder = newReminder({ title: 'Check-in', text: 'Call John' }, notesArr);
  
    expect(reminder.title).toBe('Check-in');
    expect(reminder.text).toBe('Call John');
  });
  test('verifies note', () => {
    const verified = {
        id: "47",
        title: "Gametime",
        text: "Go get buckets"
    };

    const notVerified= {
        id: "92",
        title: "Don't get dunked on"
    };

    const result = verifyNote(verified);
    const result2 = verifyNote(notVerified);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});
test('filters by query', () => {
    const ask = [
        {
            id: "34",
            title: "Study",
            text: "Watch film"
        },
        {
            id: "41",
            title: "Homework",
            text: "Do HW",
        }
    ];
    
    const editedNote = filterByQuery({ text: "Watch film" }, ask);

    expect(editedNote.length).toEqual(1);
});

test("finds by id", () => {
    const ask = [
        {
            id: "34",
            title: "Study",
            text: "Watch film"
        },
        {
            id: "41",
            title: "Homework",
            text: "Do HW",
        }
    ];
    
    const result = findById("41", ask);
    
    expect(result.title).toBe("Homework");
});
