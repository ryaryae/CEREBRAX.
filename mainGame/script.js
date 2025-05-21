window.addEventListener('load', function(){

    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1800;
    canvas.height = 900;

    let gameFrame = 0
    let decreaseGameFrame = 10
    let playerDecreaseGameFrame = 10
    let nextStageTransition = false
    let level = 0
    function updateLevel(){
        if(level < 5){
            document.getElementById('currentLevelText').textContent = `STAGE ${level + 1}`
        } else{
            document.getElementById('currentLevelText').textContent = `FINAL STAGE`
        }
    }
    updateLevel()
    
    // Player Sprite Sheet
    const playerSpriteSheet = new Image()
    playerSpriteSheet.src = './playerSpriteSheet.svg'
    let playerFrameX = 0
    let playerFrameY = 0
    const playerSpriteWidth = 128
    const playerSpriteHeight = 128
    let playerPosX = 0
    let playerPosY = 450
    let playerFrameCount = 6
    let playerAnimation = {
        idleAnimation: () => {
            playerFrameY = 0
            playerFrameCount = 6 
        },
        attackAnimation1: () => {
            playerFrameY = 1
            playerFrameCount = 6
        },
        attackAnimation2: () => {
            playerFrameY = 2
            playerFrameCount = 4
        },
        attackAnimation3: () => {
            playerFrameY = 3
            playerFrameCount = 3
        },
        hurtAnimation: () => {
            playerFrameY = 5
            playerFrameCount = 2
        },
        walkAnimation: () => {
            playerFrameY = 6
            playerFrameCount = 8
        },
        defeatedAnimation: () => {
            playerFrameY = 4
            playerFrameCount = 3
        },
        lostAnimation: () => {
            playerFrameY = 7
            playerFrameCount = 1
        }
    }

    // Enemies Sprite Sheet
    const enemy1SpriteSheet = new Image()
    enemy1SpriteSheet.src = './enemySpriteSheet1.svg'
    const enemy2SpriteSheet = new Image()
    enemy2SpriteSheet.src = './enemySpriteSheet2.svg'
    const enemy3SpriteSheet = new Image()
    enemy3SpriteSheet.src = './enemySpriteSheet3.svg'
    const enemy4SpriteSheet = new Image()
    enemy4SpriteSheet.src = './enemySpriteSheet4.svg'
    const enemy5SpriteSheet = new Image()
    enemy5SpriteSheet.src = './enemySpriteSheet5.svg'
    const enemy6SpriteSheet = new Image()
    enemy6SpriteSheet.src = './enemySpriteSheet6.svg'

    let enemySpriteSheets = [
        {
            enemySpriteSheet: enemy1SpriteSheet,
            enemyIcon: './icons/enemyIcon1.png',
            enemyFrameX: 0,
            enemyFrameY: 0,
            enemySpriteWidth: 96,
            enemySpriteHeight: 96,
            enemyPosX: 1300,
            enemyPosY: 450,
            enemyFrameCount: 5,
            idleAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 0
                enemySpriteSheets[level].enemyFrameCount = 5
                enemySpriteSheets[level].enemyPosX = 1300
            },
            attackAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 1
                enemySpriteSheets[level].enemyFrameCount = 5
                enemySpriteSheets[level].enemyPosX = 275
            },
            hurtAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 2
                enemySpriteSheets[level].enemyFrameCount = 2
            },
            defeatedAnimation: () => {
                enemySpriteSheets[level].enemyFrameX = 0
                enemySpriteSheets[level].enemyFrameY = 3
                enemySpriteSheets[level].enemyFrameCount = 1
            },
            disappearAnimation: () => {
                enemySpriteSheets[level].enemyFrameX = 0
                enemySpriteSheets[level].enemyFrameY = 0
                enemySpriteSheets[level].enemyFrameCount = 0
            }
        },
        {
            enemySpriteSheet: enemy2SpriteSheet,
            enemyIcon: './icons/enemyIcon2.png',
            enemyFrameX: 0,
            enemyFrameY: 0,
            enemySpriteWidth: 96,
            enemySpriteHeight: 96,
            enemyPosX: 1300,
            enemyPosY: 450,
            enemyFrameCount: 5,
            idleAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 1
                enemySpriteSheets[level].enemyFrameCount = 5
                enemySpriteSheets[level].enemyPosX = 1300
            },
            attackAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 2
                enemySpriteSheets[level].enemyFrameCount = 4
                enemySpriteSheets[level].enemyPosX = 275
            },
            hurtAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 3
                enemySpriteSheets[level].enemyFrameCount = 2
            },
            defeatedAnimation: () => {
                enemySpriteSheets[level].enemyFrameX = 0
                enemySpriteSheets[level].enemyFrameY = 4
                enemySpriteSheets[level].enemyFrameCount = 1
            },
            disappearAnimation: () => {
                enemySpriteSheets[level].enemyFrameX = 0
                enemySpriteSheets[level].enemyFrameY = 0
                enemySpriteSheets[level].enemyFrameCount = 0
            },
        },
        {
            enemySpriteSheet: enemy3SpriteSheet,
            enemyIcon: './icons/enemyIcon3.png',
            enemyFrameX: 0,
            enemyFrameY: 0,
            enemySpriteWidth: 96,
            enemySpriteHeight: 96,
            enemyPosX: 1300,
            enemyPosY: 450,
            enemyFrameCount: 5,
            idleAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 0
                enemySpriteSheets[level].enemyFrameCount = 5
                enemySpriteSheets[level].enemyPosX = 1300
            },
            attackAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 1
                enemySpriteSheets[level].enemyFrameCount = 4
                enemySpriteSheets[level].enemyPosX = 275
            },
            hurtAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 3
                enemySpriteSheets[level].enemyFrameCount = 2
            },
            defeatedAnimation: () => {
                enemySpriteSheets[level].enemyFrameX = 0
                enemySpriteSheets[level].enemyFrameY = 2
                enemySpriteSheets[level].enemyFrameCount = 1
            },
            disappearAnimation: () => {
                enemySpriteSheets[level].enemyFrameX = 0
                enemySpriteSheets[level].enemyFrameY = 0
                enemySpriteSheets[level].enemyFrameCount = 0
            }
        },
        {
            enemySpriteSheet: enemy4SpriteSheet,
            enemyIcon: './icons/enemyIcon4.png',
            enemyFrameX: 0,
            enemyFrameY: 0,
            enemySpriteWidth: 96,
            enemySpriteHeight: 96,
            enemyPosX: 1300,
            enemyPosY: 450,
            enemyFrameCount: 5,
            idleAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 0
                enemySpriteSheets[level].enemyFrameCount = 7
                enemySpriteSheets[level].enemyPosX = 1300
            },
            attackAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 1
                enemySpriteSheets[level].enemyFrameCount = 5
                enemySpriteSheets[level].enemyPosX = 275
            },
            hurtAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 2
                enemySpriteSheets[level].enemyFrameCount = 4
            },
            defeatedAnimation: () => {
                enemySpriteSheets[level].enemyFrameX = 0
                enemySpriteSheets[level].enemyFrameY = 3
                enemySpriteSheets[level].enemyFrameCount = 1
            },
            disappearAnimation: () => {
                enemySpriteSheets[level].enemyFrameX = 0
                enemySpriteSheets[level].enemyFrameY = 0
                enemySpriteSheets[level].enemyFrameCount = 0
            }
        },
        {
            enemySpriteSheet: enemy5SpriteSheet,
            enemyIcon: './icons/enemyIcon5.png',
            enemyFrameX: 0,
            enemyFrameY: 0,
            enemySpriteWidth: 96,
            enemySpriteHeight: 96,
            enemyPosX: 1300,
            enemyPosY: 450,
            enemyFrameCount: 5,
            idleAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 0
                enemySpriteSheets[level].enemyFrameCount = 7
                enemySpriteSheets[level].enemyPosX = 1300
            },
            attackAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 1
                enemySpriteSheets[level].enemyFrameCount = 7
                enemySpriteSheets[level].enemyPosX = 275
            },
            hurtAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 2
                enemySpriteSheets[level].enemyFrameCount = 3
            },
            defeatedAnimation: () => {
                enemySpriteSheets[level].enemyFrameX = 0
                enemySpriteSheets[level].enemyFrameY = 3
                enemySpriteSheets[level].enemyFrameCount = 1
            },
            disappearAnimation: () => {
                enemySpriteSheets[level].enemyFrameX = 0
                enemySpriteSheets[level].enemyFrameY = 0
                enemySpriteSheets[level].enemyFrameCount = 0
            }
        },
        {
            enemySpriteSheet: enemy6SpriteSheet,
            enemyIcon: './icons/enemyIcon6.png',
            enemyFrameX: 0,
            enemyFrameY: 0,
            enemySpriteWidth: 96,
            enemySpriteHeight: 96,
            enemyPosX: 1300,
            enemyPosY: 450,
            enemyFrameCount: 5,
            idleAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 0
                enemySpriteSheets[level].enemyFrameCount = 5
                enemySpriteSheets[level].enemyPosX = 1300
            },
            attackAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 1
                enemySpriteSheets[level].enemyFrameCount = 4
                enemySpriteSheets[level].enemyPosX = 275
            },
            hurtAnimation: () => {
                enemySpriteSheets[level].enemyFrameY = 2
                enemySpriteSheets[level].enemyFrameCount = 3
            },
            defeatedAnimation: () => {
                enemySpriteSheets[level].enemyFrameX = 0
                enemySpriteSheets[level].enemyFrameY = 3
                enemySpriteSheets[level].enemyFrameCount = 1
            },
            disappearAnimation: () => {
                enemySpriteSheets[level].enemyFrameX = 0
                enemySpriteSheets[level].enemyFrameY = 0
                enemySpriteSheets[level].enemyFrameCount = 0
            }
        }
    ]

    // Background Animation
    let backgroundFrame = 0
    let backgroundLayer1 = new Image()
    backgroundLayer1.src = './background/1.png'
    let backgroundLayer1Speed = 0
    let currentPositionLayer1 = 0
    let speedModifierLayer1 = 0
    let backgroundLayer2 = new Image()
    backgroundLayer2.src = './background/2.png'
    let backgroundLayer2Speed = 0.5
    let currentPositionLayer2 = 0
    let speedModifierLayer2 = 0
    let backgroundLayer3 = new Image()
    backgroundLayer3.src = './background/3.png'
    let backgroundLayer3Speed = 0
    let currentPositionLayer3 = 0
    let speedModifierLayer3 = 1
    let backgroundLayer4 = new Image()
    backgroundLayer4.src = './background/4.png'
    let backgroundLayer4Speed = 0
    let currentPositionLayer4 = 0
    let speedModifierLayer4 = 1.5
    class Layer {
        constructor(image, speed, currentPosition, speedModifier){
            this.x = 0
            this.y = 0
            this.width = canvas.width
            this.height = canvas.height
            this.image = image
            this.speed = speed
            this.currentPosition = currentPosition
            this.speedModifier = speedModifier
        }
        update(){
            this.speed
            this.x = ((backgroundFrame * this.speed) - (this.currentPosition * this.speedModifier)) % this.width
        }
        draw(){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
        }
    }

    // Skill Effects
    const effectSpriteSheet = new Image()
    effectSpriteSheet.src = './animationSpriteSheet.svg'
    let effectFrameX = 0
    let effectFrameY = -1
    const effectSpriteWidth = 320
    const effectSpriteHeight = 320
    let effectPosX = 1350
    let effectPosY = 550
    let effectFrameCount = 0
    let effectAnimation = {
        hidden: function(){
            effectFrameY = -1
            effectFrameCount = 0
            effectPosX = 0
        },
        animation1: function(){
            effectFrameY = 0
            effectFrameCount = 8
            effectPosX = 1350
        },
        animation2: function(){
            effectFrameY = 1
            effectFrameCount = 10
            effectPosX = 1350
            effectPosY = 600
        },
        animation3: function(){
            effectFrameY = 2
            effectFrameCount = 10
            effectPosX = 50
        }
    }

    const ultEffectSpriteSheet = new Image()
    ultEffectSpriteSheet.src = './ultAnimationSpriteSheet.svg'
    let ultEffectFrameX = 0
    let ultEffectFrameY = -1
    const ultEffectSpriteWidth = 110
    const ultEffectSpriteHeight = 613
    let ultEffectPosX = 1450
    let ultEffectPosY = 0
    let ultEffectFrameCount = 0
    let ultEffectAnimation = {
        hidden: () => {
            ultEffectFrameY = -1
            ultEffectFrameCount = 0
        },
        active: () => {
            ultEffectFrameY = 0
            ultEffectFrameCount = 6
        }
    }
    
    // Event Animation
    let animationDuration
    function playerSkill1(){
        animationDuration = 2700
        playerAnimation.attackAnimation1()
        enemySpriteSheets[level].hurtAnimation()
        gameFrame = 0
        enemyStats[level].enemyHP -= (playerATK * 2)
        document.getElementById('enemyHPBarRemaining').classList.toggle('animateBar')
        setTimeout(() => {
            playerPosX = 1100
            updateEnemyStats(level)
            effectAnimation.animation1()
        }, 200)
        setTimeout(() => {
            enemySpriteSheets[level].idleAnimation()
            playerAnimation.idleAnimation()
            playerPosX = 0
        }, 2200)
        setTimeout(() => {
            effectAnimation.hidden()
            document.getElementById('enemyHPBarRemaining').classList.toggle('animateBar')
            if(enemyStats[level].enemyHP <= 0){
                enemyDefeated()
            } else{
                setTimeout(nextQuestion, 0)
            }
        }, animationDuration)
    }
    function playerSkill2(){
        animationDuration = 3100
        playerAnimation.attackAnimation2()
        enemySpriteSheets[level].hurtAnimation()
        gameFrame = 0
        enemyStats[level].enemyHP -= Math.round(playerATK * 1.5)
        document.getElementById('enemyHPBarRemaining').classList.toggle('animateBar')
        document.getElementById('playerHPBarRemaining').classList.toggle('animateBar')
        playerDecreaseGameFrame = 15
        if((playerMaxHP * 0.2) + playerHP >= playerMaxHP){
            playerHP = playerMaxHP
        } else{
            playerHP += (Math.round(playerMaxHP * 0.2))
        }
        setTimeout(() => {
            playerPosX = 1100
            updateEnemyStats(level)
            updatePlayerStats()
            effectAnimation.animation2()
        }, 200)
        setTimeout(() => {
            enemySpriteSheets[level].idleAnimation()
            playerAnimation.idleAnimation()
            playerPosX = 0
        }, 2200)
        setTimeout(() => {
            playerDecreaseGameFrame = 10
            effectAnimation.hidden()
            document.getElementById('enemyHPBarRemaining').classList.toggle('animateBar')
            document.getElementById('playerHPBarRemaining').classList.toggle('animateBar')
            if(enemyStats[level].enemyHP <= 0){
                enemyDefeated()
            } else{
                nextQuestion()
            }
        }, animationDuration)
    }
    function playerSkill3(){
        animationDuration = 2900
        if((playerMaxHP * 0.3) + playerHP >= playerMaxHP){
            playerHP = playerMaxHP
        } else{
            playerHP += (Math.round(playerMaxHP * 0.3))
        }
        document.getElementById('playerHPBarRemaining').classList.toggle('animateBar')
        setTimeout(() => {
            updateEnemyStats(level)
            updatePlayerStats()
            effectAnimation.animation3()
        }, 200)
        setTimeout(() => {
            effectAnimation.hidden()
            document.getElementById('playerHPBarRemaining').classList.toggle('animateBar')
            setTimeout(nextQuestion, 0)
        }, animationDuration)
    }
    function playerSkill4(){
        animationDuration = 5000
        backgroundLayer1.src = './ultimateSkillBackground/1.png'
        backgroundLayer2.src = './ultimateSkillBackground/2.png'
        backgroundLayer3.src = './ultimateSkillBackground/3.png'
        backgroundLayer4.src = './ultimateSkillBackground/4.png'
        setTimeout(() => {
            playerDecreaseGameFrame = 1
            playerPosX = 1100
            playerAnimation.attackAnimation2()
            ultEffectAnimation.active()
            enemySpriteSheets[level].hurtAnimation()
        }, 200)
        setTimeout(() => {
            playerHP = playerMaxHP
            document.getElementById('playerHPBarRemaining').classList.toggle('animateBar')
            enemyStats[level].enemyHP -= (playerATK * 5)
            document.getElementById('enemyHPBarRemaining').classList.toggle('animateBar')
            updatePlayerStats()
            updateEnemyStats(level)
            playerDecreaseGameFrame = 10
            playerPosX = 0
            playerAnimation.idleAnimation()
            enemySpriteSheets[level].idleAnimation()
            ultEffectAnimation.hidden()
        }, 3000)
        setTimeout(() => {
            document.getElementById('playerSkill4').style = 'cursor: not-allowed'
            document.getElementById('playerSkill4').removeEventListener('click', hideSkills)
            document.getElementById('playerSkill4').removeEventListener('click', playerSkills[3])
            correctPoints = 0
            updateCorrectPoints()
            playerATK += 5
            updatePlayerStats()
            backgroundLayer1.src = './background/1.png'
            backgroundLayer2.src = './background/2.png'
            backgroundLayer3.src = './background/3.png'
            backgroundLayer4.src = './background/4.png'
        }, 4000)
        setTimeout(() => {
            updateHoverStats()
        }, 4100)
        setTimeout(() => {
            if(enemyStats[level].enemyHP <= 0){
                enemyDefeated()
            } else{
                nextQuestion()
            }
        }, animationDuration)
    }
    function enemyDefeated(){
        if(level == 5){
            enemySpriteSheets[level].defeatedAnimation()
            document.getElementById('eventMessage').style = 'color: black'
            document.getElementById('eventMessage').textContent = 'YOU BEAT THE GAME'
            document.getElementById('playAgainButton').classList.toggle('hidden')
        } else{
            document.getElementById('eventMessage').style = 'color: black'
            document.getElementById('eventMessage').textContent = `STAGE ${level + 1} CLEARED`
            enemySpriteSheets[level].defeatedAnimation()
            setTimeout(() => {
                nextStageTransition = true
                playerAnimation.walkAnimation()
                enemySpriteSheets[level].disappearAnimation()
                document.getElementById('eventMessage').textContent = ''
            }, 2000)
            setTimeout(() => {
                level++
                updateLevel()
                updateEnemyStats(level)
                playerAnimation.idleAnimation()
                enemySpriteSheets[level].idleAnimation()
                updateEnemyStats(level)
                nextStageTransition = false
                document.getElementById('enemyIcon').src = enemySpriteSheets[level].enemyIcon
                setTimeout(nextQuestion, 0)
            }, 5000)
        }
    }
    function enemyAttack(){
        animationDuration = 1800
        enemySpriteSheets[level].attackAnimation()
        playerHP -= enemyStats[level].enemyATK
        updatePlayerStats()
        document.getElementById('playerHPBarRemaining').classList.toggle('animateBar')
        playerAnimation.hurtAnimation()
        playerDecreaseGameFrame = 30
        setTimeout(() => {
            updatePlayerStats()
        }, 200)
        setTimeout(() => {
            playerDecreaseGameFrame = 10
            enemySpriteSheets[level].idleAnimation()
            playerAnimation.idleAnimation()
            if(playerHP <= 0){
                playerDefeated()
            } else{
                document.getElementById('playerHPBarRemaining').classList.toggle('animateBar')
                nextQuestion()
            }
        }, animationDuration)
    }
    function playerDefeated(){
        gameFrame = 0
        playerDecreaseGameFrame = 30
        playerAnimation.defeatedAnimation()
        setTimeout(() => {
            playerAnimation.lostAnimation()
        }, 1200)
        setTimeout(() => {
            document.getElementById('eventMessage').style = 'color: black'
            document.getElementById('eventMessage').textContent = 'PLAYER DEFEATED'
            document.getElementById('playAgainButton').classList.toggle('hidden')
        }, 2000)
    }
    document.getElementById('playAgainButton').addEventListener('click', () => {
        window.location.href = './index.html'
    })

    // Update
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Background Animation
        let layer1 = new Layer(backgroundLayer1, backgroundLayer1Speed, currentPositionLayer1, speedModifierLayer1)
        let layer2 = new Layer(backgroundLayer2, backgroundLayer2Speed, currentPositionLayer2, speedModifierLayer2)
        let layer3 = new Layer(backgroundLayer3, backgroundLayer3Speed, currentPositionLayer3, speedModifierLayer3)
        let layer4 = new Layer(backgroundLayer4, backgroundLayer4Speed, currentPositionLayer4, speedModifierLayer4)
        let backgroundLayers = [layer1, layer2, layer3, layer4]
        backgroundLayers.forEach(layer => {
            layer.update()
            layer.draw()
        })

        // Ult Animation
        let ultEffectPositionFrameX = Math.floor(gameFrame/decreaseGameFrame) % ultEffectFrameCount
        ultEffectFrameX = ultEffectSpriteWidth * ultEffectPositionFrameX
        ctx.drawImage(ultEffectSpriteSheet, ultEffectFrameX, ultEffectFrameY * ultEffectSpriteHeight, ultEffectSpriteWidth, ultEffectSpriteHeight, ultEffectPosX, ultEffectPosY, ultEffectSpriteWidth * 1.1, ultEffectSpriteHeight * 1.1)

        // Enemy Animation
        let enemyPositionFrameX = Math.floor(gameFrame/decreaseGameFrame) % enemySpriteSheets[level].enemyFrameCount
        enemyFrameX = enemySpriteSheets[level].enemySpriteWidth * enemyPositionFrameX
        ctx.drawImage(enemySpriteSheets[level].enemySpriteSheet, enemyFrameX, enemySpriteSheets[level].enemyFrameY * enemySpriteSheets[level].enemySpriteHeight, enemySpriteSheets[level].enemySpriteWidth, enemySpriteSheets[level].enemySpriteHeight, enemySpriteSheets[level].enemyPosX, enemySpriteSheets[level].enemyPosY, enemySpriteSheets[level].enemySpriteWidth * 4, enemySpriteSheets[level].enemySpriteHeight * 4)

        // Skill Effects
        let effectPositionFrameX = Math.floor(gameFrame/decreaseGameFrame) % effectFrameCount
        effectFrameX = effectSpriteWidth * effectPositionFrameX
        ctx.drawImage(effectSpriteSheet, effectFrameX, effectFrameY * effectSpriteHeight, effectSpriteWidth, effectSpriteHeight, effectPosX, effectPosY, effectSpriteWidth, effectSpriteHeight)

        // Player Animation
        let playerPositionFrameX = Math.floor(gameFrame/playerDecreaseGameFrame) % playerFrameCount
        playerFrameX = playerSpriteWidth * playerPositionFrameX
        ctx.drawImage(playerSpriteSheet, playerFrameX, playerFrameY * playerSpriteHeight, playerSpriteWidth, playerSpriteHeight, playerPosX, playerPosY, playerSpriteWidth * 3, playerSpriteHeight * 3)

        if(nextStageTransition == true){
            currentPositionLayer3 += speedModifierLayer3
            currentPositionLayer4 += speedModifierLayer4
        }
    
        backgroundFrame--
        gameFrame++
        requestAnimationFrame(animate)
    };
    animate()


    // Back-End Logic
    let correctPoints = 0

    let playerMaxHP = 100
    let playerHP = 100
    let playerATK = 10

    let enemyStats = [
        {
            enemyMaxHP: 70,
            enemyHP: 70,
            enemyATK: 10
        },
        {
            enemyMaxHP: 100,
            enemyHP: 100,
            enemyATK: 15
        },
        {
            enemyMaxHP: 125,
            enemyHP: 125,
            enemyATK: 20
        },
        {
            enemyMaxHP: 150,
            enemyHP: 150,
            enemyATK: 25
        },
        {
            enemyMaxHP: 200,
            enemyHP: 200,
            enemyATK: 30
        },
        {
            enemyMaxHP: 300,
            enemyHP: 300,
            enemyATK: 35
        }
    ]

    function updateHoverStats(){
        document.getElementById('hoverSkill1-ATK').textContent = `(${playerATK * 2})`
        document.getElementById('hoverSkill2-ATK').textContent = `(${Math.round(playerATK * 1.5)})`
        document.getElementById('hoverSkill2-Heal').textContent = `(${Math.round(playerMaxHP * 0.2)})`
        document.getElementById('hoverSkill3-Heal').textContent = `(${Math.round(playerMaxHP * 0.3)})`
        document.getElementById('hoverSkill4-ATK').textContent = `(${Math.round(playerATK * 5)})`
    }
    updateHoverStats()
    
    document.getElementById('playerATK').textContent = `ATK: ${playerATK}`
    document.getElementById('enemyATK').textContent = `ATK: ${enemyStats[level].enemyATK}`

    function updateEnemyStats(level){
        if(enemyStats[level].enemyHP <= 0){
            document.getElementById('enemyHPBarRemaining').style = `width: 0`
            document.getElementById('enemyHPText').textContent = `0 / ${enemyStats[level].enemyMaxHP}`
        } else{
            document.getElementById('enemyHPBarRemaining').style = `width: ${400*(enemyStats[level].enemyHP/enemyStats[level].enemyMaxHP)}px`
            document.getElementById('enemyHPText').textContent = `${enemyStats[level].enemyHP} / ${enemyStats[level].enemyMaxHP}`
        }
        document.getElementById('enemyATK').textContent = `ATK: ${enemyStats[level].enemyATK}`
    }
    updateEnemyStats(level)

    function updatePlayerStats(){
        if(playerHP <= 0){
            document.getElementById('playerHPBarRemaining').style = `width: 0`
            document.getElementById('playerHPText').textContent = `0 / ${playerMaxHP}`
        } else{
            document.getElementById('playerHPBarRemaining').style = `width: ${400*(playerHP/playerMaxHP)}px`
            document.getElementById('playerHPText').textContent = `${playerHP} / ${playerMaxHP}`
        }
        document.getElementById('playerATK').textContent = `ATK: ${playerATK}`
    }
    updatePlayerStats()

    function updateCorrectPoints(){
        document.getElementById('correctPointsFill').style = `width: ${300*(correctPoints/7)}px`
        document.getElementById('correctPointsText').textContent = `${correctPoints} / 7`
    }
    updateCorrectPoints()
    
    function toggleSkills(){
        document.getElementById('chooseSkillTitle').classList.toggle('hidden')
        document.getElementById('playerSkill1').classList.toggle('hidden')
        document.getElementById('playerSkill2').classList.toggle('hidden')
        document.getElementById('playerSkill3').classList.toggle('hidden')
        document.getElementById('playerSkill4').classList.toggle('hidden')
    }

    let playerSkills = [playerSkill1, playerSkill2, playerSkill3, playerSkill4]
    
    for(let i = 1; i <= 4; i++){
        let playerSkill = document.getElementById(`playerSkill${i}`)
        if(i == 4){
            if(correctPoints == 7){
                playerSkill.addEventListener('click', hideSkills)
                playerSkill.addEventListener('click', playerSkills[i - 1])
            }
            playerSkill.addEventListener('mouseover', toggleHover)
            playerSkill.addEventListener('mouseout', toggleHover)
        } else{
            playerSkill.addEventListener('click', hideSkills)
            playerSkill.addEventListener('click', playerSkills[i - 1])
            playerSkill.addEventListener('mouseover', toggleHover)
            playerSkill.addEventListener('mouseout', toggleHover)
        }
        function hideSkills(){
            setTimeout(() => {
                playerSkill.removeEventListener('click', playerSkills[i - 1])
            }, 1)
            toggleHover()
            document.getElementById('chooseSkillTitle').classList.toggle('hidden')
            playerSkill.removeEventListener('click', hideSkills)
            for(let j = 1; j <= 4; j++){
                playerSkill.removeEventListener('mouseover', toggleHover)
                playerSkill.removeEventListener('mouseout', toggleHover)
                let playerSkillHidden = document.getElementById(`playerSkill${j}`)
                if(j == i){
                    playerSkillHidden.classList.toggle('animateChooseSkill')
                    setTimeout(() => {
                        playerSkillHidden.classList.toggle('hidden')
                        playerSkillHidden.classList.toggle('animateChooseSkill')
                        playerSkill.addEventListener('click', hideSkills)
                    }, 1900)
                } else{
                    playerSkillHidden.classList.toggle('hidden')
                }
            }
            setTimeout(() => {
                playerSkill.addEventListener('click', playerSkills[i - 1])
                playerSkill.addEventListener('mouseover', toggleHover)
                playerSkill.addEventListener('mouseout', toggleHover)
            }, 2000)
        }
        function toggleHover(){
            document.getElementById(`hoverSkill${i}`).classList.toggle('hidden')
        }
    }

    // Quiz Logic
    let currentQuestionIndex
    let timeLeft = 30 
    let timerInterval
    let choiceVariable
    
    let usedQuestions = []


    function randomizeQuestion(){
        do {
            currentQuestionIndex = Math.round(Math.random() * (questionSets.length - 1))
        } while(usedQuestions.includes(currentQuestionIndex))
        usedQuestions.push(currentQuestionIndex)
    }
    randomizeQuestion()

    function showQuestion(){
        this.document.getElementById('questionTitle').textContent = questionSets[currentQuestionIndex].question
        for(let i = 0; i < 4; i++){
            choiceVariable = document.getElementById(`choice${i}`)
            choiceVariable.textContent = questionSets[currentQuestionIndex].choices[i]
            choiceVariable.onclick = () => selectAnswer(questionSets[currentQuestionIndex].choices[i])
        }
        startTimer()
    }

    function startTimer(){
        timeLeft = 30
        document.getElementById('timer').textContent = `${timeLeft}s`
        clearInterval(timerInterval)
        timerInterval = setInterval(() => {
            timeLeft--
            document.getElementById('timer').textContent = `${timeLeft}s`
            document.getElementById('timerBarRemaining').style = `width: ${500*(timeLeft/30)}px`
            if(timeLeft === 0){
                document.getElementById('eventMessage').textContent = 'YOU RAN OUT OF TIME'
                toggleQuestions()
                enemyAttack()
                clearInterval(timerInterval)
            }
        }, 1000)
    }
    
    function selectAnswer(choice){
        toggleQuestions()
        clearInterval(timerInterval)
        if(questionSets[currentQuestionIndex].answer === choice){
            document.getElementById('eventMessage').style = 'color: green'
            document.getElementById('eventMessage').textContent = 'YOUR ANSWER IS CORRECT'
            if(correctPoints < 7){
                correctPoints++
                if(correctPoints == 7){
                    document.getElementById('playerSkill4').style = 'cursor: pointer'
                    document.getElementById('playerSkill4').addEventListener('click', hideSkills)
                    document.getElementById('playerSkill4').addEventListener('click', playerSkills[3])
                }
            }
            updateCorrectPoints()
            document.getElementById('correctPointsFill').classList.toggle('animateBar')
            setTimeout(() => {
                document.getElementById('correctPointsFill').classList.toggle('animateBar')
                document.getElementById('eventMessage').textContent = ''
                toggleSkills()
            }, 2000)
        } else{
            document.getElementById('eventMessage').style = 'color: red'
            document.getElementById('eventMessage').textContent = 'YOUR ANSWER IS INCORRECT'
            setTimeout(() => {
                document.getElementById('eventMessage').textContent = ''
                enemyAttack()
            }, 2000)
        }
    }

    function nextQuestion(){
        document.getElementById('eventMessage').textContent = ''
        toggleQuestions()
        randomizeQuestion()
        showQuestion()
    }

    showQuestion()

    function toggleQuestions(){
        document.getElementById('choice0').classList.toggle('hidden')
        document.getElementById('choice1').classList.toggle('hidden')
        document.getElementById('choice2').classList.toggle('hidden')
        document.getElementById('choice3').classList.toggle('hidden')
        document.getElementById('questionTitle').classList.toggle('hidden')
        document.getElementById('timerBarRemaining').style = 'width: 500px'
        document.getElementById('timerDiv').classList.toggle('hidden')
        document.getElementById('timerBar').classList.toggle('hidden')
    }

    document.getElementById('backHome').addEventListener('click', () => {
        window.location.href = '../main.html'
    })
})