# Personal-Weight-Sheets-Scripts

# Overview:  

This repository is for fun. It has the Google script I wrote to aid in recording daily calories and weight for modeling weight over time. While I am an advocate of intuitive eating for most people, I find it *fun* to have graphical representations of my biology and also to more precisely monitor changes in my metabolism, etc. I use the model to approximate maintenance calories needed per day. The Google sheet is quickly updated through the mobile app via the script, with daily charts depicting my running median weight, weight, and weight over the past (usually) 100 days. Rather than share the sheet I personally use, I've made a duplicate [here](https://docs.google.com/spreadsheets/d/1IT6woGeGJCVxaaguKvCthA8YgjMTViE1bA84M5y63Zc/edit?usp=sharing) for technical reasons (and also privacy).

# The Data:  

I record the data daily, inputting (approximate) calories as I eat them and body weight each morning before submitting to the "record" sheet.

# The Model:  

I make 3 linear models. Two of them are used only graphically. The main model used is a simple linear regression of my weight over the past 100 days. The slope of the model is used to calculate maintenance calories by taking the 100-day average of calories I eat and subtracting 3500 times the slope: 3500 calories is the approximate number per pound of body fat. Should I desire to use a different amount of time instead of 100 days, I can edit a particular cell which will then trigger a script to remake the charts and recalculate the maintenance based on that new timeframe.

# Challenges:  

Perhaps the most obvious challenge is in recording the data. I just do my best. Ocassionally I miss a day and use interpolation to fix those missing data. Another challenge is the fact that bodies change, and in particular, metabolisms do. To combat this, I use the previous 100 days for the calculations. Generally speaking, 100 days seems to be adequate to accomodate changes in seasons, habits, age, and, of course, body weight. Of note, metabolism is expected to *increase* as body weight increases.

# Results:  

Personally, I think the script does a great job letting me know how much I can/should eat. I've learned as long as I eat generally healthfully, I can eat quite a bit without gaining too much weight. The sheet and script very, very rarely inhibit how much I eat. On the contrary, like having a good budget of finances, this lets me know when I can enjoy a few extra chocolates without feeling guilty whatsoever.
