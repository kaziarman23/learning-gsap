Gsap is a library that's help us to animated anything.

## Installation of Gsap :

    "npm i gsap @gsap/react"

1.  we have to import useGsap hook to rander the animetion from @gsap/react.
2.  and we also have to import gsap to use gsap animetion from gsap.

## gasp.to("targeted-id",{animetion value's})

## File name : GaspTo.jsx

1.  we have to use animation inside of the useGasp hook.
2.  inside that hook we have to use gasp.to() mathod. the first property will be the targeted id that we want to animated ,and the second property will be an object that contain's animation for the targeted id.
3.  it will start animating from start.

## gasp.from("#targeted-id",{animetion value's})

## File name : GaspFrom.jsx

1.  we have to use animation inside of the useGasp hook.
2.  inside that hook we have to use gasp.to() mathod. the first property will be the targeted id that we want to animated ,and the second property will be an object that contain's animation for the targeted id.
3.  it will start animating from end.

## gasp.fromTo("#targeted-id",{ starting animetion value's},{ ending animetion value's})

## File name : GaspFrom.jsx

1.  we have to use animation inside of the useGasp hook.
2.  inside that hook we have to use gasp.to() mathod. the first property will be the targeted id that we want to animated ,and the second two property will be an object that contain's animation for the targeted id.
3.  it will start animating from start to end and end to start.

## gasp.timeline()

## File name : GaspTimeline.jsx

1. with this method we can set a time line of a animation.
2. fistly we have to import useGasp hook from @gsap/react and gsap from gsap.
3. then we have to call the timeline method from the gsap and store it in a variable.in that method we can assign the initially animation property's.
4. now we can use the timeline.to() method in the useGsap hook for several times.


## gasp.to()

## File name : GaspStagger.jsx

1. we have to import useGasp hook from @gsap/react and gsap from gsap.
2. then in the useGsap hook we will apply gsap.to() method .
3. in that method we can select the classes of that div's and can animated all the class by accessing the stagger property.
4. we can use the stagger property like an object. 


## gasp.to()

## File name : GaspScrollTrigger.jsx

1. we have to import scrollTrigger from gsap/all, use useRef hook from react, gsap from gsap.
2. we have to register the plugIn 
    gsap.registerPlugIn(scrollTrigger)

3. we have to store useRef in a variable, and assgin it in a praent div.
4. then in the useGsap hook we will select all the children div and store in a array and do a forEach loop to run the animetion.
5. with scrollTrigger property we can have lot's of cool animetion property like :
    trigger property which can target the animeted div,
    start property which contain two value's first one is for the div and the second one is for the viewport,
    end property which also contain two property first one is of declearing the viewport angle and the other one is for percent.
6. and in the useGsap hook we can also use the second peramiter : 
    { scroll: scrollRef}
    by using it it will know when to run the animation.
