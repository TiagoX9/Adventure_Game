
var darkPath1 = prompt("You encounter some rebels inside your base. You use 'LIGHTSABER', 'FORCE CHOKE', or send 'STORMTROOPERS'?").toUpperCase();
var firstBattle = Math.floor(Math.random() * 10);
var secondBattle = Math.floor(Math.random() * 10);
var thirdBattle = Math.floor(Math.random() * 10);

switch (darkPath1) {
    case 'LIGHTSABER':
        if (firstBattle <= 8) {
            document.getElementById("darkside").innerHTML = 'You destroyed the Resistance soldiers';
            var darkPath2 = prompt('You attack the rebel planet and are blocked by squadrons of rebel soldiers. Continue using "LIGHTSABER", "TIE FIGHTERS" or "RETREAT"?').toUpperCase();
            switch (darkPath2) {
                case 'LIGHTSABER':
                    if (secondBattle <= 6) {
                        document.getElementById("darkside").innerHTML = 'You are a Sith Lord and you were able to kill them all!';
                        var darkPath3 = "";//prompt('Luke SkyWalker shows to fight you. Use "LIGHSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (darkPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'After a hard fight, you got Luke with a skilled swing of your lightsaber, ending Luke´s life and the Rebels with it. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and killed you with only 3 strikes. GAME OVER';
                                }
                                break; 
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You catched Luke of guard and threw him off a cliff with your Force Push. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and evaded your Force Push. Killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            default:
                               // document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'You died! Even with all you power the troopers were too many. GAME OVER';
                    }
                    break;
                case 'TIE FIGHTERS':
                    if (secondBattle <= 6) {
                        document.getElementById("darkside").innerHTML = 'Your pilots are very skilled and wiped out the entire base';
                        var darkPath3 = prompt('Luke SkyWalker shows too fight you. Use "LIGHSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (darkPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'After a hard fight, you got Luke with a skilled swing of your lightsaber, ending Luke´s life and the Rebels with it. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You catched Luke of guard and threw him off a cliff with your Force Push. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and evaded your Force Push. Killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'The rebels shields stood against your attacks. Heavy loss for the Empire! GAME OVER';
                    }
                    break;
                case 'RETREAT':
                    if (secondBattle <= 4) {
                        document.getElementById("darkside").innerHTML = 'You were able to retreat and fight another day! ';
                        var darkPath3 = prompt('Luke SkyWalker shows too fight you. Use "LIGHSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (darkPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'After a hard fight, you got Luke with a skilled swing of your lightsaber, ending Luke´s life and the Rebels with it. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You catched Luke of guard and threw him off a cliff with your Force Push. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and evaded your Force Push. Killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'The rebels took out you Star Destroyer while you were escaping killing everyone in there. GAME OVER';
                    }
                    break;
                default:
                    document.getElementById("darkside").innerHTML = 'Please choose one of the options provided!';
            }
        } else {
            document.getElementById("darkside").innerHTML = 'Some rebel with a lucky shot killed you. GAME OVER';
        }
        break;
    case 'FORCE CHOKE':
        if (firstBattle <= 7) {
            document.getElementById("darkside").innerHTML = "You crushed too many throats to count.";
            var darkPath2 = prompt('You attack the rebel planet and are blocked by squadrons of rebel soldiers. Continue using "LIGHTSABER", "TIE FIGHTERS" or "RETREAT"?').toUpperCase();
            switch (darkPath2) {
                case 'LIGHTSABER':
                    if (secondBattle <= 6) {
                        document.getElementById("darkside").innerHTML = 'You are a Sith Lord and you were able to kill them all!';
                        var darkPath3 = prompt('Luke SkyWalker shows too fight you. Use "LIGHSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (darkPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'After a hard fight, you got Luke with a skilled swing of your lightsaber, ending Luke´s life and the Rebels with it. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You catched Luke of guard and threw him off a cliff with your Force Push. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and evaded your Force Push. Killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'You died! Even with all you power the troopers were too many. GAME OVER';
                    }
                    break;
                case 'TIE FIGHTERS':
                    if (secondBattle <= 6) {
                        document.getElementById("darkside").innerHTML = 'Your pilots are very skilled and wiped out the entire base';
                        var darkPath3 = prompt('Luke SkyWalker shows too fight you. Use "LIGHSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (darkPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'After a hard fight, you got Luke with a skilled swing of your lightsaber, ending Luke´s life and the Rebels with it. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You catched Luke of guard and threw him off a cliff with your Force Push. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and evaded your Force Push. Killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'The rebels shields stood against your attacks. Heavy loss for the Empire! GAME OVER';
                    }
                    break;
                case 'RETREAT':
                    if (secondBattle <= 4) {
                        document.getElementById("darkside").innerHTML = 'You were able to retreat and fight another day!';
                        var darkPath3 = prompt('Luke SkyWalker shows too fight you. Use "LIGHTSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (darkPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'After a hard fight, you got Luke with a skilled swing of your lightsaber, ending Luke´s life and the Rebels with it. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You catched Luke of guard and threw him off a cliff with your Force Push. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and evaded your Force Push. Killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'The rebels took out you Star Destroyer while you were escaping killing everyone in there. GAME OVER';
                    }
                    break;
                default:
                    document.getElementById("darkside").innerHTML = 'Please choose one of the options provided!';
            }
        } else {
            document.getElementById("darkside").innerHTML = 'Some rebel blew up the base, taking you along with it. GAME OVER';
        }
        break;
    case 'STORMTROOPERS':
        if (firstBattle <= 5) {
            document.getElementById("darkside").innerHTML = 'The squadron of StormTroopers dealt very well with the threat';
            var darkPath2 = prompt('You attack the rebel planet and are blocked by squadrons of rebel soldiers. Continue using "LIGHTSABER", "TIE FIGHTERS" or "RETREAT"?').toUpperCase();
            switch (darkPath2) {
                case 'LIGHTSABER':
                    if (secondBattle <= 6) {
                        document.getElementById("darkside").innerHTML = 'You are a Sith Lord and you were able to kill them all!';
                        var darkPath3 = prompt('Luke SkyWalker shows too fight you. Use "LIGHTSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (darkPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'After a hard fight, you got Luke with a skilled swing of your lightsaber, ending Luke´s life and the Rebels with it. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You catched Luke of guard and threw him off a cliff with your Force Push. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and evaded your Force Push. Killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'You died! Even with all you power the troopers were too many. GAME OVER';
                    }
                    break;
                case 'TIE FIGHTERS':
                    if (secondBattle <= 6) {
                        document.getElementById("darkside").innerHTML = 'Your pilots are very skilled and wiped out the entire base';
                        var darkPath3 = prompt('Luke SkyWalker shows too fight you. Use "LIGHTSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (darkPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'After a hard fight, you got Luke with a skilled swing of your lightsaber, ending Luke´s life and the Rebels with it. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML ='You catched Luke of guard and threw him off a cliff with your Force Push. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and evaded your Force Push. Killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'The rebels shields stood against your attacks. Heavy loss for the Empire! GAME OVER';
                    }
                    break;
                case 'RETREAT':
                    if (secondBattle <= 4) {
                        document.getElementById("darkside").innerHTML = 'You were able to retreat and fight another day!';
                        var darkPath3 = prompt('Luke SkyWalker shows too fight you. Use "LIGHTSABER" or "FORCE PUSH"?').toUpperCase();
                        switch (darkPath3) {
                            case 'LIGHTSABER':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'After a hard fight, you got Luke with a skilled swing of your lightsaber, ending Luke´s life and the Rebels with it. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            case 'FORCE PUSH':
                                if (thirdBattle <= 5) {
                                    document.getElementById("darkside").innerHTML = 'You catched Luke of guard and threw him off a cliff with your Force Push. You WON!';
                                } else {
                                    document.getElementById("darkside").innerHTML = 'Luke is just to powerful and evaded your Force Push. Killed you with only 3 strikes. GAME OVER';
                                }
                                break;
                            default:
                                document.getElementById("darkside").innerHTML = 'Please choose one of the paths provided!';
                        }
                    } else {
                        document.getElementById("darkside").innerHTML = 'The rebels took out you Star Destroyer while you were escaping killing everyone in there.GAME OVER ';
                    }
                    break;
                default:
                    document.getElementById("darkside").innerHTML = 'Please choose one of the options provided!';
            }
        } else {
            document.getElementById("darkside").innerHTML = 'Your troopers were too weak. The rebels took over the base. GAME OVER';
        }
        break;
    default:
        document.getElementById("darkside").innerHTML = "What? Choose one of the provided ways.";
}
