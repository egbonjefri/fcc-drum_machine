import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    drumPads : [
    {
      keyCode: 81,
      index: 0,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
 
    },
    {
      keyCode: 87,
      index: 1,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
 
    },
    {
      keyCode: 69,
      index: 2,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  
    },
    {
      keyCode: 65,
      index: 3,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',

    },
    {
      keyCode: 83,
      index: 4,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',

    },
    {
      keyCode: 68,
      index: 5,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  
    },
    {
      keyCode: 90,
      index: 6,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
   
    },
    {
      keyCode: 88,
      index: 7,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
   
    },
    {
      keyCode: 67,
      index: 8,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
   
    }
  ],
    banky: false,
    truthy: false,
    name: '',
    volume: 50,
   drumPads2:  [
    {
      keyCode: 81,
      index: 0,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  
    },
    {
      keyCode: 87,
      index: 1,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
 
    },
    {
      keyCode: 69,
      index: 2,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  
    },
    {
      keyCode: 65,
      index: 3,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
 
    },
    {
      keyCode: 83,
      index: 4,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  
    },
    {
      keyCode: 68,
      index: 5,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  
    },
    {
      keyCode: 90,
      index: 6,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  
    },
    {
      keyCode: 88,
      index: 7,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  
    },
    {
      keyCode: 67,
      index: 8,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
     
    }
  ],

};


  export const drumSlice = createSlice({
      name: 'counter',
      initialState,
      reducers: {
          playDrums: (state, action) => {

              if (!state.banky) {
                  // eslint-disable-next-line
            state.drumPads.map((drums) => {
                if(action.payload === drums.keyCode && state.truthy) {
                    const drummy = document.getElementsByClassName('drums')[drums.index];
                  
                    drummy.classList.add('new');
                    function myStopper () {
                        drummy.classList.remove('new')
                    }
                    setTimeout(myStopper, 300);
                    const audio = new Audio(drums.url);
                    audio.load();
                    audio.play();
                    audio.volume = state.volume/100
                    state.name = drums.id;

            }
            })
          }
          else {
              // eslint-disable-next-line
            state.drumPads2.map((drums) => {
            if(action.payload === drums.keyCode && state.truthy) {
                const drummy = document.getElementsByClassName('drums')[drums.index];
                drummy.classList.add('new');
                function myStopper () {
                    drummy.classList.remove('new')
                }
                setTimeout(myStopper, 300);
                const audio = new Audio(drums.url);
                audio.load();
                audio.play();
                audio.volume = state.volume/100
                state.name = drums.id;

            }
        })
      }
        },
        banks: (state, action) => {
            const one = document.getElementsByClassName('one')[0];
            const two = document.getElementsByClassName('two')[0];
            if (action.payload) {
                state.banky = true;
                two.classList.add('active');
                one.classList.remove('active')
            }
            else {
            state.banky = false;
 
            one.classList.add('active')
            two.classList.remove('active')

            }
        },
        power: (state, action) => {
            if (action.payload) {
                state.truthy = true
            }
            else {
                state.truthy = false;
                state.name = ''
            }
        },
        volume: (state, action) => {
          if (state.truthy) {
          state.name = `Volume: ${action.payload}`;
          state.volume = action.payload;
        }

      }
    }
  })

  export const { playDrums, banks, power, volume } = drumSlice.actions;

  export default drumSlice.reducer