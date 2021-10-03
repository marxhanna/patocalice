kaboom({
    ...{"fullscreen":true,"width":200,"height":200,"scale":2,"startScene":"main","version":"0.5.0","clearColor":[0,0,0,1]},
    global: true,
  });

  loadRoot("https://i.imgur.com/")

  loadSprite('chão', 'PaSFOFS.png')
  loadSprite('escuro', 'SJVWJwY.png')
  loadSprite('muro1', '04IpkuU.png')
  loadSprite('muro2', 'yyYro5W.png')
  loadSprite('bg', '3Qz3emc.png')
  
  scene("main", (args = {}) => {
  
  const map = [
    [
        '                                     ', 
        '                                     ',
        '                                     ',
        '                                     ',
        'nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        '=====================================',
    ]
  ]
  
  
  const levelCfg = {
    width : 32,
    height : 32,
    '=' : [ sprite('chão'), solid()],
    'o' : [ sprite('escuro'), solid()],
    'x' : [ sprite('muro1'),layer("bg")],
    'n' : [ sprite('muro2'),layer("bg")],
  }
  
  addLevel(map,levelCfg)
  
  });
  go("main");