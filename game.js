kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    clearColor: [0,0,0,1]
})

loadRoot("https://i.imgur.com/")

loadSprite('bloco', 'PaSFOFS.png')
loadSprite('bg', '3Qz3emc.png')

loadSprite("allan", "JnRGmn6.png", {
    sliceX: 13,
    anims: {
        idle: {
            from: 0,
            to: 12,
        },  
    },
});

loadSprite("marina", "HCCKitc.png", {
    sliceX: 4,
    anims: {
        idle: {
            from: 0,
            to: 3,
        },  
    },
});

loadSprite("guria", "1QWW7YG.png", {
    sliceX: 8,
    anims: {
        idle: {
            from: 0,
            to: 0,
        },
        move: {
            from: 0,
            to: 7,
        },
        
    },
});

scene("game", () => {
    layers([
        "bg",
        "obj",
        "ui",
    ], "obj");

    addLevel([
        '                                     ', 
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    ], {
        width: 32,
        height: 32,
        'x' : [sprite('bloco'), solid()]
    })

    const player = add([
        sprite("guria", {
            animSpeed: 0.1,
            frame: 0
        }),
        solid(),
        body(),
        pos(60,0),
        origin('bot'),
        {
            speed: 120
        }
    ])

    const npc_marina = add([
        sprite("marina", {
            animSpeed: 0.3,
            frame: 0
        }),
        solid(),
        body(),
        pos(70,0),
        origin('bot'),
        {
            speed: 120
        }
    ]);

    const npc_allan = add([
        sprite("allan", {
            animSpeed: 0.12,
            frame: 0
        }),
        solid(),
        body(),
        pos(80,0),
        origin('bot'),
        {
            speed: 120
        }
    ]);

    npc_allan.flipX(true)
    npc_allan.play('idle')
    npc_marina.flipX(true)
    npc_marina.play('idle')

    keyDown('left', () => {
        player.flipX(true)
        player.move(-120,0)
    })

    keyDown('right', () => {
        player.flipX(false)
        player.move(120,0)
    })
    
    keyPress('space', () => {
        if(player.grounded()){
            player.jump(390)
            isJumping = true
        }
    })

    //animar guria
    keyPress('left', () => {
        player.flipX(true)
        player.play('move')
    })

    keyPress('right', () => {
        player.flipX(false)
        player.play('move')
    })    

    //////////////////////

    // animar parado //
    keyRelease('left', () => {
        player.play('idle')
    })

    keyRelease('right', () => {
        player.play('idle')
    })
    ///////////////////////////
})

go("game");
