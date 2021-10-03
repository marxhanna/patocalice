kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    clearColor: [0,0,0,1]
})

loadRoot("https://i.imgur.com/")

loadSprite('bloco', 'PaSFOFS.png')
loadSprite('bg', '3Qz3emc.png')

loadSprite("allan", "97h99vo.png")

loadSprite("marina", "HCCKitc.png", {
    sliceX: 4,
    anims: {
        idle: {
            from: 0,
            to: 3,
        },  
    },
});

loadSprite("guria", "lLh9pIE.png", {
    sliceX: 7.9,
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
        "game",
        "ui",
    ], "game");

    const maps = [
        [
            '                                     ', 
            '                                     ',
            '                                     ',
            '                                     ',
            '                                     ',
            '                                     ',
            '=====================================',
        ]
    ]

    const levelCfg = {
        width: 32,
        height: 32,
        '=': [sprite('bloco'), solid()]
    }

    const gameLevel = addLevel(maps, levelCfg)


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
        sprite("allan"),
        solid(),
        body(),
        pos(80,0),
        origin('bot'),
        {
            speed: 120
        }
    ]);

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