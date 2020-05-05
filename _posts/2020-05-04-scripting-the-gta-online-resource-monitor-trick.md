---
layout: post
title:  Scripting the Grand Theft Auto Online Resource Monitor Trick
categories:
- games
- automation
---

Automating anything is a passion of mine. I hate doing repetitive things even outside of coding. When playing Grand Theft Auto 5 online with my friends, there's a trick we use to get a public session by ourselves. There're several ways to do it:

- cut your laptop or game console wifi for 10 seconds
- suspend the GTA5.exe process in windows for 10 seconds
- turn reboot your router (which takes 10 to 30 seconds)

The most convenient of these would be the process suspend trick. Since we'd still be connected to Discord while we do it. Normally you'd tab out of GTA5 then open resource monitor. Then right click the GTA5.exe process and click suspend. Then right click it again after 10 seconds and resume the process.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/c8pdomxyjME" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

I decided to make a script to do this much faster than clicking around. Here's what it looks like:

{% highlight Batchfile %}
cd %cd%
.\pssuspend GTA5.exe /accepteula
echo "Please wait suspending process for 10 seconds"
timeout 10
.\pssuspend -r GTA5.exe /accepteula
{% endhighlight %}

This uses the `pssuspend` utility from Microsoft. By default it isn't a part of windows. You can read more about it and how to install it [here](https://docs.microsoft.com/en-us/sysinternals/downloads/pssuspend).

You can download **[this zipfile](/files/gtasuspend.zip)** I prepared with the script and the `pssuspend` program already inside of it. I recommend putting the zipfile's contents in a folder called GTA on your Desktop.

<img src="/static/img/desktop-gta.jpg" alt="screenshot of gta folder location" width="100%">

To use this while in-game all you have to do is press `windows key + r` and put the following in the run prompt:

`%HOMEPATH%\Desktop\GTA\gtasuspend.bat`

<img src="/static/img/run.jpg" alt="screenshot of run prompt" width="100%">

You can press enter and run this without the game running. It won't do anything if GTA5 isn't running. The neat thing about the run prompt is that it'll remember the last thing you ran in it. That means when GTA is actually running you won't need to tab out too long to do the process suspend. Just press `windows key + r` and enjoy your **"private" public lobby**.

That's it! Happy Gaming!
