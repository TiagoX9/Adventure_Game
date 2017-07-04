var lightPath1 = prompt("You are one with the Force and the Empire is trying to take over your base. You use 'LIGHTSABER', 'FORCE PUSH', or send 'MIND TRICK'?").toUpperCase();
var firstBattle = Math.floor(Math.random() * 10);
var secondBattle = Math.floor(Math.random() * 10);
var thirdBattle = Math.floor(Math.random() * 10);

switch (lightPath1) {
    case 'LIGHTSABER':
        if (firstBattle <= 8) {
            document.getElementById("darkside").innerHTML = 'You dashed through stormtroopers and AT-AT´s and defeated them';
            var lightPath2 = prompt('After the defence the rebel goes all in into the Death Star. Continue using "LIGHTSABER", "X-WING" or "RETREAT"?').toUpperCase();
            switch (lightPath2) {
                case 'LIGHTSABER':
                    if (secondBattle <= 6) {
                        document.getElementById("darkside").innerHTML = 'Your Jedi skills are impressive and you successeful entered the Death Star';
                        var lightPath3 = prompt('You encountered Darth Vader. Use "LIGHTSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (lightPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'Although Vader is a powerful Sith, you are excellent swordsman and defeated him. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'You never stood a chance against the Dark Lord of the Sith. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You successeful pushed Vader to the core of the Death Star. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Vader seems immune to your Force Push. He strikes you down with his red blade. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'You died! Your experience it´s not enough to beat the Empire. GAME OVER';
                    }
                    break;
                case 'X-WING':
                    if (secondBattle <= 6) {
                        document.getElementById("darkside").innerHTML = 'As Red Leader you could enter the base';
                        var lightPath3 = prompt('You encountered Darth Vader. Use "LIGHTSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (lightPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'Although Vader is a powerful Sith, you are excellent swordsman and defeated him. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'You never stood a chance against the Dark Lord of the Sith. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You successeful pushed Vader to the core of the Death Star. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Vader seems immune to your Force Push. He strikes you down with his red blade. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'The defenses of the Death Star are just too powerfull. You and your team were wiped out! GAME OVER';
                    }
                    break;
                case 'RETREAT':
                    if (secondBattle <= 4) {
                        document.getElementById("darkside").innerHTML = 'You were able to retreat and fight another day! ';
                        var lightPath3 = prompt('You encountered Darth Vader. Use "LIGHTSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (lightPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'Although Vader is a powerful Sith, you are excellent swordsman and defeated him. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'You never stood a chance against the Dark Lord of the Sith. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You successeful pushed Vader to the core of the Death Star. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Vader seems immune to your Force Push. He strikes you down with his red blade. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'You were able to flee but the losses were to great to keep the Rebellion alive. GAME OVER';
                    }
                    break;
                default:
                    document.getElementById("darkside").innerHTML = 'Please choose one of the options provided!';
            }
        } else {
            document.getElementById("darkside").innerHTML = 'You were surrounded and shot down. GAME OVER';
        }
        break;
    case 'FORCE PUSH':
        if (firstBattle <= 7) {
            document.getElementById("darkside").innerHTML = 'You managed to keep stormtroopers away.';
            var lightPath2 = prompt('After the defence the rebel goes all in into the Death Star. Continue using "LIGHTSABER", "X-WING" or "RETREAT"?').toUpperCase();
            switch (lightPath2) {
                case 'LIGHTSABER':
                    if (secondBattle <= 6) {
                        document.getElementById("darkside").innerHTML = 'Your Jedi skills are impressive and you successeful entered the Death Star';
                        var lightPath3 = prompt('You encountered Darth Vader. Use "LIGHTSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (lightPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'Although Vader is a powerful Sith, you are excellent swordsman and defeated him. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'You never stood a chance against the Dark Lord of the Sith. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You successeful pushed Vader to the core of the Death Star. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Vader seems immune to your Force Push. He strikes you down with his red blade. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'You died! Your experience it´s not enough to beat the Empire. GAME OVER';
                    }
                    break;
                case 'X-WING':
                    if (secondBattle <= 6) {
                        document.getElementById("darkside").innerHTML = 'As Red Leader you could enter the base';
                        var lightPath3 = prompt('You encountered Darth Vader. Use "LIGHTSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (lightPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'Although Vader is a powerful Sith, you are excellent swordsman and defeated him. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'You never stood a chance against the Dark Lord of the Sith. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You successeful pushed Vader to the core of the Death Star. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Vader seems immune to your Force Push. He strikes you down with his red blade. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'The defenses of the Death Star are just too powerfull. You and your team were wiped out! GAME OVER';
                    }
                    break;
                case 'RETREAT':
                    if (secondBattle <= 4) {
                        document.getElementById("darkside").innerHTML = 'You were able to retreat and fight another day! ';
                        var lightPath3 = prompt('You encountered Darth Vader. Use "LIGHTSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (lightPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'Although Vader is a powerful Sith, you are excellent swordsman and defeated him. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'You never stood a chance against the Dark Lord of the Sith. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You successeful pushed Vader to the core of the Death Star. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Vader seems immune to your Force Push. He strikes you down with his red blade. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'You were able to flee but the losses were to great to keep the Rebellion alive. GAME OVER';
                    }
                    break;
                default:
                    document.getElementById("darkside").innerHTML = 'Please choose one of the options provided!';
            }
        } else {
            document.getElementById("darkside").innerHTML = 'Your Push doesn´t keep everyone away and there are too many blasters. GAME OVER';
        }
        break;
    case 'MIND TRICK':
        if (firstBattle <= 5) {
            document.getElementById("darkside").innerHTML = 'You turned the troopers agains each other with a simple mind trick';
            var lightPath2 = prompt('After the defence the rebel goes all in into the Death Star. Continue using "LIGHTSABER", "X-WING" or "RETREAT"?').toUpperCase();
            switch (lightPath2) {
                case 'LIGHTSABER':
                    if (secondBattle <= 6) {
                        document.getElementById("darkside").innerHTML = 'Your Jedi skills are impressive and you successeful entered the Death Star';
                        var lightPath3 = prompt('You encountered Darth Vader. Use "LIGHTSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (lightPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'Although Vader is a powerful Sith, you are excellent swordsman and defeated him. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'You never stood a chance against the Dark Lord of the Sith. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You successeful pushed Vader to the core of the Death Star. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Vader seems immune to your Force Push. He strikes you down with his red blade. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'You died! Your experience it´s not enough to beat the Empire. GAME OVER';
                    }
                    break;
                case 'X-WING':
                    if (secondBattle <= 6) {
                        document.getElementById("darkside").innerHTML = 'As Red Leader you could enter the base';
                        var lightPath3 = prompt('You encountered Darth Vader. Use "LIGHTSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (lightPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'Although Vader is a powerful Sith, you are excellent swordsman and defeated him. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'You never stood a chance against the Dark Lord of the Sith. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You successeful pushed Vader to the core of the Death Star. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Vader seems immune to your Force Push. He strikes you down with his red blade. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'The defenses of the Death Star are just too powerfull. You and your team were wiped out! GAME OVER';
                    }
                    break;
                case 'RETREAT':
                    if (secondBattle <= 4) {
                        document.getElementById("darkside").innerHTML = 'You were able to retreat and fight another day! ';
                        var lightPath3 = prompt('You encountered Darth Vader. Use "LIGHTSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (lightPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'Although Vader is a powerful Sith, you are excellent swordsman and defeated him. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'You never stood a chance against the Dark Lord of the Sith. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You successeful pushed Vader to the core of the Death Star. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Vader seems immune to your Force Push. He strikes you down with his red blade. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'You were able to flee but the losses were to great to keep the Rebellion alive. GAME OVER';
                    }
                    break;
                default:
                    document.getElementById("darkside").innerHTML = 'Please choose one of the options provided!';
            }
        } else {
            document.getElementById("darkside").innerHTML = 'These soldiers were not weak minded and the arrested and took you to Death Star prison. GAME OVER';
        }
        break;
    default:
        document.getElementById("darkside").innerHTML = "What? Choose one of the provided ways.";
}