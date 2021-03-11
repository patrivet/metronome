# Metronome
An app displaying a digital metronome with the option to specify a bpm from prefixed set.  Associated songs which use the selected bpm are additionally shown.

## How to run:

 1. Clone this repo ```git clone https://github.com/patrivet/metronome.git```
 2. Install dependancies ```npm install```
 3.  Optional setup: If you wish to provide either (i) a custom list of BPMs to be used and/or (ii) display an fuller list of songs for a given BPM, create an (environment) file named ".env" and populate with the following:-
```
REACT_APP_BPMS='<YOUR_BPMS_HERE>'
REACT_APP_INIT_BPM=<YOUR_STARTING_BPM_HERE>
REACT_APP_SONGS_API_URL='https://api.getsongbpm.com/tempo/?api_key=<API_KEY>&bpm=<BPM>'
REACT_APP_SONGS_API_KEY='<YOUR_API_KEY_HERE>'
```
 
BPMs customisation: 
(i) Inside the /env file, replace <YOUR_BPMS_HERE> with your BPMs - e.g.  '72, 74, 128, 140, 174, 190'
Replace <YOUR_STARTING_BPM_HERE> with one of the BPMs - e.g. 74

Songs customisation
(ii) 
- Register for an API key at https://getsongkey.com/api and inside the .env file, replace <YOUR_API_KEY_HERE> with this api key. 

 4.  Run app ```npm start```

## Live app:
See the app hosted [here](https://metronome-pr.netlify.app)
