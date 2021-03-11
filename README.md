# Metronome
An app displaying a digital metronome with the option to specify a bpm from prefixed set.  Associated songs which use the selected bpm are additionally shown.

## How to run:

 1. Clone this repo ```git clone https://github.com/patrivet/metronome.git```
 2. Install dependancies ```npm install```
 3.  Optionally, if you wish to provide a list of BPMs (Beats per minute), create an file named ".env" and populate with your chosen data in the following format:-

(In this example - the BPMS: 72, 74, 128, 140, 174 and 190 will be shown.  The initially selected BPM will be 74bpm).

```
REACT_APP_BPMS="72, 74, 128, 140, 174, 190"
REACT_APP_INIT_BPM=174
```
 4.  Run app ```npm start```

## Live app:
See the app hosted [here](https://metronome-pr.netlify.app)
