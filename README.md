# NTI Display
The Next Train Indicator (NTI) Problem

# Mobile Tech Test
The Mobile tech test is a programming exercise to evaluate the candidate's technical skills
and approach to software development. The candidate is expected to produce a mobile app
that demonstrates they understand how to solve the problem using clear concise code.

You are required to model the described NTI display system will be displayed in the mobile
application. At the end of the test, you should be able to display a UI component in the
Mobile showing which trains will be arriving at the platform within the next 15 minutes from
the current simulated time.


# Operation
The NTI display will work within a virtual timeframe (VT) that is faster than real time (RT):
1 minute (VT) = 1 second (RT).

The NTI display should be able to display all expected train information for the next 15 VT
mins.

The NTI display should list each expected train on a separate line and should indicate:<br />
  1) The order the trains will arrive<br />
  2) The destination of each train<br />
  3) The amount of minutes before each train arrives<br />
  
The NTI display should only be tall enough to list at most two expected trains at a time

The NTI display should not be interactive but it should always display up to date information,
if required paging should be done automatically.

The NTI display should display the current VT below the list of expected trains.

The NTI display will begin at 05:00 VT and continue infinitely.


# Destination Frequency
For the purposes of this test use the following schedules:
Train Schedules:<br />

1. Central Station Every 20mins<br />
2. Circular Every hour on the hour<br />
3. North Square Every 12mins from 07:00 until 22:00<br />
4. West Market Every 6mins from 05:30 until 01:30<br />

# Run-Code
1. npm install --global expo-cli
2. Open terminal in folder path and run "npm install" or "yarn install"
3. "npm start" or "yarn start"
4. Install Expo from google play or Appstore on your phone and scan the QR code
