//종족
var elf = 0,
    human = 0,
    beast = 0,
    goblin = 0,
    demon = 0,
    undead = 0,
    orc = 0,
    naga = 0,
    elementals = 0,
    troll = 0,
    dragon = 0,
    dwarf = 0,
    satyr = 0,
    ogre = 0,
    god = 0;

//직업
var assassin = 0,
    warrior = 0,
    mage = 0,
    warlock = 0,
    hunter = 0,
    knight = 0,
    mech = 0,
    druid = 0,
    demonhunter = 0,
    shaman = 0;
var pieces_num = 0;

//시너지 설정

//엘프
anti_mage = ['anti_mage', 'elf', 'demonhunter'];
treant_protector = ['treant_protector', 'elf', 'druid'];
luna = ['luna', 'elf', 'knight'];
furion = ['furion', 'elf', 'druid']
puck = ['puck', 'elf', 'dragon', 'mage'];
windranger = ['windranger', 'elf', 'hunter'];
phantom_assassin = ['phantom_assassin', 'elf', 'assassin'];
mirana = ['mirana', 'elf', 'hunter'];
templar_assassin = ['templar_assassin', 'elf', 'assassin'];

//인간
crystal = ['crystal', 'human', 'mage'];
omniknight = ['omniknight', 'human', 'knight']
lina = ['lina', 'human', 'mage'];
lycan = ['lycan', 'human', 'beast', 'warrior'];
kunkka = ['kunkka', 'human', 'warrior'];
light_keeper = ['light_keeper', 'human', 'mage'];
dragon_knight = ['dragon_knight', 'human', 'knight', 'dragon'];

//야수
enchantress = ['enchantress', 'beast', 'druid'];
tusk = ['tusk', 'beast', 'warrior']
venomancer = ['venomancer', 'beast', 'warlock'];
sand_king = ['sand_king', 'beast', 'assassin']
lone_druid = ['lone_druid', 'beast', 'druid'];

//고블린
tinker = ['tinker', 'goblin', 'mech'];
clockwerk = ['clockwerk', 'goblin', 'mech']
bounty_hunter = ['bounty_hunter', 'goblin', 'assassin'];
timbersaw = ['timbersaw', 'goblin', 'mech']
alchemist = ['alchemist', 'goblin', 'warlock'];
techies = ['techies', 'goblin', 'mech'];

//데몬
queen_of_pain = ['queen_of_pain', 'demon', 'assassin'];
chaos_knight = ['chaos_knight', 'demon', 'knight']
terrorblade = ['terrorblade', 'demon', 'demonhunter'];
shadow_fiend = ['shadow_fiend', 'demon', 'warlock']
doom = ['doom', 'demon', 'warrior'];

//언데드
drow_ranger = ['drow_ranger', 'undead', 'hunter'];
abaddon = ['abaddon', 'undead', 'knight']
necrophos = ['necrophos', 'undead', 'warlock'];
lich = ['lich', 'undead', 'mage']
death_prophet = ['death_prophet', 'undead', 'warlock'];

//오크
axe = ['axe', 'orc', 'warrior'];
beastmaster = ['beastmaster', 'orc', 'hunter']
juggernaut = ['juggernaut', 'orc', 'warrior'];
disruptor = ['disruptor', 'orc', 'shaman']

//나가
slardar = ['slardar', 'naga', 'warrior'];
slark = ['slark', 'naga', 'assassin']
medusa = ['medusa', 'naga', 'hunter'];
tidehunter = ['tidehunter', 'naga', 'hunter']

//엘리멘탈
tiny = ['tiny', 'elementals', 'warrior'];
morphling = ['morphling', 'elementals', 'assassin']
razor = ['razor', 'elementals', 'mage'];
enigma = ['enigma', 'elementals', 'warlock']

//트롤
bat_rider = ['bat_rider', 'troll', 'knight'];
shadow_shaman = ['shadow_shaman', 'troll', 'shaman']
witch_doctor = ['witch_doctor', 'troll', 'warlock'];
troll_warlord = ['troll_warlord', 'troll', 'warrior']

//드래곤
viper = ['viper', 'dragon', 'assassin']

//드워프
sniper = ['sniper', 'dwarf', 'hunter'];
gyrocopter = ['gyrocopter', 'dwarf', 'mech']

//사티로스
riki = ['riki', 'satyr', 'assassin'];

//오거
ogre_magi = ['ogre_magi', 'ogre', 'mage'];

//신
mars = ['mars', 'god', 'warrior'];
zeus = ['zeus', 'god', 'mage'];

$(function () {
    $('.bReset').click(function () {
        elf = 0, human = 0, beast = 0, goblin = 0, demon = 0, undead = 0, orc = 0, naga = 0, elementals = 0, troll = 0, dragon = 0, dwarf = 0, satyr = 0, ogre = 0, god = 0;
        assassin = 0, warrior = 0, mage = 0, warlock = 0, hunter = 0, knight = 0, mech = 0, druid = 0, demonhunter = 0, shaman = 0;
        pieces_num = 0;
        $('.pieces > img').css('opacity', '0.3');
        $('span.star').text('　');
        squad_synergy();
    });
    $('.bTier').text('티어\nOFF');
    $(".bTier").mousedown(function () {
        alert("티어기능은 점검중입니다.");
        if ($('.bTier').text() == '티어\nON') {
            //$('.bTier').text('티어\nOFF');
            //$('.tier').css("display","none");
        } else {
            //$('.bTier').text('티어\nON');
            //$('.tier').css("display","inline");
        }
    });
    $(".bTier").hover(function () {

    });
    $('.anti_mage').mousedown(function (e) {
        potrait_opacity(anti_mage, e.which);
    });
    $('.treant_protector').mousedown(function (e) {
        potrait_opacity(treant_protector, e.which);
    });
    $('.luna').mousedown(function (e) {
        potrait_opacity(luna, e.which);
    });
    $('.furion').mousedown(function (e) {
        potrait_opacity(furion, e.which);
    });
    $('.puck').mousedown(function (e) {
        potrait_opacity(puck, e.which);
    });
    $('.windranger').mousedown(function (e) {
        potrait_opacity(windranger, e.which);
    });
    $('.phantom_assassin').mousedown(function (e) {
        potrait_opacity(phantom_assassin, e.which);
    });
    $('.mirana').mousedown(function (e) {
        potrait_opacity(mirana, e.which);
    });
    $('.templar_assassin').mousedown(function (e) {
        potrait_opacity(templar_assassin, e.which);
    });

    $('.crystal').mousedown(function (e) {
        potrait_opacity(crystal, e.which);
    });
    $('.omniknight').mousedown(function (e) {
        potrait_opacity(omniknight, e.which);
    });
    $('.lina').mousedown(function (e) {
        potrait_opacity(lina, e.which);
    });
    $('.lycan').mousedown(function (e) {
        potrait_opacity(lycan, e.which);
    });
    $('.kunkka').mousedown(function (e) {
        potrait_opacity(kunkka, e.which);
    });
    $('.light_keeper').mousedown(function (e) {
        potrait_opacity(light_keeper, e.which);
    });
    $('.dragon_knight').mousedown(function (e) {
        potrait_opacity(dragon_knight, e.which);
    });

    $('.enchantress').mousedown(function (e) {
        potrait_opacity(enchantress, e.which);
    });
    $('.tusk').mousedown(function (e) {
        potrait_opacity(tusk, e.which);
    });
    $('.venomancer').mousedown(function (e) {
        potrait_opacity(venomancer, e.which);
    });
    $('.sand_king').mousedown(function (e) {
        potrait_opacity(sand_king, e.which);
    });
    $('.lone_druid').mousedown(function (e) {
        potrait_opacity(lone_druid, e.which);
    });

    $('.tinker').mousedown(function (e) {
        potrait_opacity(tinker, e.which);
    });
    $('.clockwerk').mousedown(function (e) {
        potrait_opacity(clockwerk, e.which);
    });
    $('.bounty_hunter').mousedown(function (e) {
        potrait_opacity(bounty_hunter, e.which);
    });
    $('.timbersaw').mousedown(function (e) {
        potrait_opacity(timbersaw, e.which);
    });
    $('.alchemist').mousedown(function (e) {
        potrait_opacity(alchemist, e.which);
    });
    $('.techies').mousedown(function (e) {
        potrait_opacity(techies, e.which);
    });

    $('.queen_of_pain').mousedown(function (e) {
        potrait_opacity(queen_of_pain, e.which);
    });
    $('.chaos_knight').mousedown(function (e) {
        potrait_opacity(chaos_knight, e.which);
    });
    $('.terrorblade').mousedown(function (e) {
        potrait_opacity(terrorblade, e.which);
    });
    $('.shadow_fiend').mousedown(function (e) {
        potrait_opacity(shadow_fiend, e.which);
    });
    $('.doom').mousedown(function (e) {
        potrait_opacity(doom, e.which);
    });

    $('.drow_ranger').mousedown(function (e) {
        potrait_opacity(drow_ranger, e.which);
    });
    $('.abaddon').mousedown(function (e) {
        potrait_opacity(abaddon, e.which);
    });
    $('.necrophos').mousedown(function (e) {
        potrait_opacity(necrophos, e.which);
    });
    $('.lich').mousedown(function (e) {
        potrait_opacity(lich, e.which);
    });
    $('.death_prophet').mousedown(function (e) {
        potrait_opacity(death_prophet, e.which);
    });

    $('.axe').mousedown(function (e) {
        potrait_opacity(axe, e.which);
    });
    $('.beastmaster').mousedown(function (e) {
        potrait_opacity(beastmaster, e.which);
    });
    $('.juggernaut').mousedown(function (e) {
        potrait_opacity(juggernaut, e.which);
    });
    $('.disruptor').mousedown(function (e) {
        potrait_opacity(disruptor, e.which);
    });

    $('.slardar').mousedown(function (e) {
        potrait_opacity(slardar, e.which);
    });
    $('.slark').mousedown(function (e) {
        potrait_opacity(slark, e.which);
    });
    $('.medusa').mousedown(function (e) {
        potrait_opacity(medusa, e.which);
    });
    $('.tidehunter').mousedown(function (e) {
        potrait_opacity(tidehunter, e.which);
    });

    $('.tiny').mousedown(function (e) {
        potrait_opacity(tiny, e.which);
    });
    $('.morphling').mousedown(function (e) {
        potrait_opacity(morphling, e.which);
    });
    $('.razor').mousedown(function (e) {
        potrait_opacity(razor, e.which);
    });
    $('.enigma').mousedown(function (e) {
        potrait_opacity(enigma, e.which);
    });

    $('.bat_rider').mousedown(function (e) {
        potrait_opacity(bat_rider, e.which);
    });
    $('.shadow_shaman').mousedown(function (e) {
        potrait_opacity(shadow_shaman, e.which);
    });
    $('.witch_doctor').mousedown(function (e) {
        potrait_opacity(witch_doctor, e.which);
    });
    $('.troll_warlord').mousedown(function (e) {
        potrait_opacity(troll_warlord, e.which);
    });

    $('.viper').mousedown(function (e) {
        potrait_opacity(viper, e.which);
    });

    $('.sniper').mousedown(function (e) {
        potrait_opacity(sniper, e.which);
    });
    $('.gyrocopter').mousedown(function (e) {
        potrait_opacity(gyrocopter, e.which);
    });

    $('.riki').mousedown(function (e) {
        potrait_opacity(riki, e.which);
    });

    $('.ogre_magi').mousedown(function (e) {
        potrait_opacity(ogre_magi, e.which);
    });

    $('.mars').mousedown(function (e) {
        potrait_opacity(mars, e.which);
    });
    $('.zeus').mousedown(function (e) {
        potrait_opacity(zeus, e.which);
    });
});

//영웅클릭
function potrait_opacity(unit_name, input) {
    if (input == 1) {
        if ($('.' + unit_name[0] + ' span.star:first').text() == '　') {
            $('.' + unit_name[0] + ' span.star:first').text(' ');
            $('.' + unit_name[0] + ' > img').css('opacity', '1');
            pieces_num++;
            for (i = 0; unit_name[i] != null; i++) {
                if (unit_name[i] == 'elf') {
                    elf++;
                } else if (unit_name[i] == 'human') {
                    human++;
                } else if (unit_name[i] == 'beast') {
                    beast++;
                } else if (unit_name[i] == 'goblin') {
                    goblin++;
                } else if (unit_name[i] == 'demon') {
                    demon++;
                } else if (unit_name[i] == 'undead') {
                    undead++;
                } else if (unit_name[i] == 'orc') {
                    orc++;
                } else if (unit_name[i] == 'naga') {
                    naga++;
                } else if (unit_name[i] == 'elementals') {
                    elementals++;
                } else if (unit_name[i] == 'troll') {
                    troll++;
                } else if (unit_name[i] == 'dragon') {
                    dragon++;
                } else if (unit_name[i] == 'dwarf') {
                    dwarf++;
                } else if (unit_name[i] == 'ogre') {
                    ogre++;
                } else if (unit_name[i] == 'satyr') {
                    satyr++;
                } else if (unit_name[i] == 'assassin') {
                    assassin++;
                } else if (unit_name[i] == 'warrior') {
                    warrior++;
                } else if (unit_name[i] == 'mage') {
                    mage++;
                } else if (unit_name[i] == 'warlock') {
                    warlock++;
                } else if (unit_name[i] == 'hunter') {
                    hunter++;
                } else if (unit_name[i] == 'knight') {
                    knight++;
                } else if (unit_name[i] == 'mech') {
                    mech++;
                } else if (unit_name[i] == 'druid') {
                    druid++;
                } else if (unit_name[i] == 'demonhunter') {
                    demonhunter++;
                } else if (unit_name[i] == 'shaman') {
                    shaman++;
                } else if (unit_name[i] == 'god') {
                    god++;
                }
            }
        } else {
            $('.' + unit_name[0] + ' > img').css('opacity', '0.3');
            $('.' + unit_name[0] + ' span.star').text('　');
            pieces_num--;
            for (i = 0; unit_name[i] != null; i++) {
                if (unit_name[i] == 'elf') {
                    elf--;
                } else if (unit_name[i] == 'human') {
                    human--;
                } else if (unit_name[i] == 'beast') {
                    beast--;
                } else if (unit_name[i] == 'goblin') {
                    goblin--;
                } else if (unit_name[i] == 'demon') {
                    demon--;
                } else if (unit_name[i] == 'undead') {
                    undead--;
                } else if (unit_name[i] == 'orc') {
                    orc--;
                } else if (unit_name[i] == 'naga') {
                    naga--;
                } else if (unit_name[i] == 'elementals') {
                    elementals--;
                } else if (unit_name[i] == 'troll') {
                    troll--;
                } else if (unit_name[i] == 'dragon') {
                    dragon--;
                } else if (unit_name[i] == 'dwarf') {
                    dwarf--;
                } else if (unit_name[i] == 'ogre') {
                    ogre--;
                } else if (unit_name[i] == 'satyr') {
                    satyr--;
                } else if (unit_name[i] == 'assassin') {
                    assassin--;
                } else if (unit_name[i] == 'warrior') {
                    warrior--;
                } else if (unit_name[i] == 'mage') {
                    mage--;
                } else if (unit_name[i] == 'warlock') {
                    warlock--;
                } else if (unit_name[i] == 'hunter') {
                    hunter--;
                } else if (unit_name[i] == 'knight') {
                    knight--;
                } else if (unit_name[i] == 'mech') {
                    mech--;
                } else if (unit_name[i] == 'druid') {
                    druid--;
                } else if (unit_name[i] == 'demonhunter') {
                    demonhunter--;
                } else if (unit_name[i] == 'shaman') {
                    shaman--;
                } else if (unit_name[i] == 'god') {
                    god--;
                }
            }
        }
        squad_synergy();
    }
}

function squad_synergy() {
    $('.count_pieces').text(pieces_num);
    if (pieces_num > 10) {
        $('.over_count').css('display', 'inline');
        $('.over_count').text("최대 말 수를 넘었습니다.");
    } else {
        $('.over_count').css('display', 'none');
    }

    if (elf < 3) {
        $('.elf_synergy').text('(3)(6)(9)');
        $('.count_elf').css('display', 'none');
    } else if (elf >= 9) {
        $('.elf_synergy').html('<span style="color:white;">(3)(6)(9)</span>');
    } else if (elf >= 6) {
        $('.elf_synergy').html('<span style="color:white;">(3)(6)</span>(9)');
    } else if (elf >= 3) {
        $('.count_elf').css('display', 'inline');
        $('.elf_synergy').html('<span style="color:white;">(3)</span>(6)(9)');
    }

    if (human < 2) {
        $('.human_synergy').text("(2)(4)(6)");
        $('.count_human').css('display', 'none');
    } else if (human >= 6) {
        $('.human_synergy').html('<span style="color:white;">(2)(4)(6)</span>');
    } else if (human >= 4) {
        $('.human_synergy').html('<span style="color:white;">(2)(4)</span>(6)');
    } else if (human >= 2) {
        $('.human_synergy').html('<span style="color:white;">(2)</span>(4)(6)');
        $('.count_human').css('display', 'inline');
    }

    if (beast < 2) {
        $('.beast_synergy').text("(2)(4)");
        $('.count_beast').css('display', 'none');
    } else if (beast >= 4) {
        $('.beast_synergy').html('<span style="color:white;">(2)(4)</span>');
    } else if (beast >= 2) {
        $('.beast_synergy').html('<span style="color:white;">(2)</span>(4)');
        $('.count_beast').css('display', 'inline');
    }

    if (goblin < 3) {
        $('.goblin_synergy').text("(3)(6)");
        $('.count_goblin').css('display', 'none');
    } else if (goblin >= 6) {
        $('.goblin_synergy').html('<span style="color:white;">(3)(6)</span>');
    } else if (goblin >= 3) {
        $('.goblin_synergy').html('<span style="color:white;">(3)</span>(6)');
        $('.count_goblin').css('display', 'inline');
    }

    if (demon < 1) {
        $('.demon_synergy').text("(1)");
        $('.count_demon').css('display', 'none');
    } else if (demon == 1) {
        $('.demon_synergy').html('<span style="color:white;">(1)</span>');
        $('.count_demon').css('display', 'inline');
    }

    if (undead < 2) {
        $('.undead_synergy').text("(2)(4)");
        $('.count_undead').css('display', 'none');
    } else if (undead >= 6) {
        $('.undead_synergy').html('<span style="color:white;">(2)(4)(6)</span>');
    } else if (undead >= 4) {
        $('.undead_synergy').html('<span style="color:white;">(2)(4)</span>');
    } else if (undead >= 2) {
        $('.undead_synergy').html('<span style="color:white;">(2)</span>(4)');
        $('.count_undead').css('display', 'inline');
    }

    if (orc < 2) {
        $('.orc_synergy').text("(2)(4)");
        $('.count_orc').css('display', 'none');
    } else if (orc >= 4) {
        $('.orc_synergy').html('<span style="color:white;">(2)(4)</span>');
    } else if (orc >= 2) {
        $('.orc_synergy').html('<span style="color:white;">(2)</span>(4)');
        $('.count_orc').css('display', 'inline');
    }

    if (naga < 2) {
        $('.naga_synergy').text("(2)");
        $('.count_naga').css('display', 'none');
    } else if (naga >= 2) {
        $('.naga_synergy').html('<span style="color:white;">(2)</span>');
        $('.count_naga').css('display', 'inline');
    }

    if (elementals < 2) {
        $('.elementals_synergy').text("(2)(4)");
        $('.count_elementals').css('display', 'none');
    } else if (elementals >= 4) {
        $('.elementals_synergy').html('<span style="color:white;">(2)(4)</span>');
    } else if (elementals >= 2) {
        $('.elementals_synergy').html('<span style="color:white;">(2)</span>(4)');
        $('.count_elementals').css('display', 'inline');
    }

    if (troll < 2) {
        $('.troll_synergy').text("(2)(4)");
        $('.count_troll').css('display', 'none');
    } else if (troll >= 4) {
        $('.troll_synergy').html('<span style="color:white;">(2)(4)</span>');
    } else if (troll >= 2) {
        $('.troll_synergy').html('<span style="color:white;">(2)</span>(4)');
        $('.count_troll').css('display', 'inline');
    }

    if (dragon < 3) {
        $('.dragon_synergy').text("(3)");
        $('.count_dragon').css('display', 'none');
    } else if (dragon == 3) {
        $('.dragon_synergy').html('<span style="color:white;">(3)</span>');
        $('.count_dragon').css('display', 'inline');
    }

    if (dwarf < 1) {
        $('.dwarf_synergy').text("(1)");
        $('.count_dwarf').css('display', 'none');
    } else if (dwarf == 1) {
        $('.dwarf_synergy').html('<span style="color:white;">(1)</span>');
        $('.count_dwarf').css('display', 'inline');
    }

    if (satyr < 1) {
        $('.satyr_synergy').text("(1)");
        $('.count_satyr').css('display', 'none');
    } else if (satyr == 1) {
        $('.satyr_synergy').html('<span style="color:white;">(1)</span>');
        $('.count_satyr').css('display', 'inline');
    }

    if (ogre < 1) {
        $('.ogre_synergy').text("(1)");
        $('.count_ogre').css('display', 'none');
    } else if (ogre == 1) {
        $('.ogre_synergy').html('<span style="color:white;">(1)</span>');
        $('.count_ogre').css('display', 'inline');
    }

    if (assassin < 3) {
        $('.assassin_synergy').text("(3)(6)(9)");
        $('.count_assassin').css('display', 'none');
    } else if (assassin >= 9) {
        $('.assassin_synergy').html('<span style="color:white;">(3)(6)(9)</span>');
    } else if (assassin >= 6) {
        $('.assassin_synergy').html('<span style="color:white;">(3)(6)</span>(9)');
    } else if (assassin >= 3) {
        $('.assassin_synergy').html('<span style="color:white;">(3)</span>(6)(9)');
        $('.count_assassin').css('display', 'inline');
    }

    if (warrior < 3) {
        $('.warrior_synergy').text("(3)(6)(9)");
        $('.count_warrior').css('display', 'none');
    } else if (warrior >= 9) {
        $('.warrior_synergy').html('<span style="color:white;">(3)(6)(9)</span>');
    } else if (warrior >= 6) {
        $('.warrior_synergy').html('<span style="color:white;">(3)(6)</span>(9)');
    } else if (warrior >= 3) {
        $('.warrior_synergy').html('<span style="color:white;">(3)</span>(6)(9)');
        $('.count_warrior').css('display', 'inline');
    }

    if (mage < 3) {
        $('.mage_synergy').text("(3)(6)");
        $('.count_mage').css('display', 'none');
    } else if (mage >= 6) {
        $('.mage_synergy').html('<span style="color:white;">(3)(6)</span>');
    } else if (mage >= 3) {
        $('.mage_synergy').html('<span style="color:white;">(3)</span>(6)');
        $('.count_mage').css('display', 'inline');
    }

    if (warlock < 3) {
        $('.warlock_synergy').text("(3)(6)");
        $('.count_warlock').css('display', 'none');
    } else if (warlock >= 6) {
        $('.warlock_synergy').html('<span style="color:white;">(3)(6)</span>');
    } else if (warlock >= 3) {
        $('.warlock_synergy').html('<span style="color:white;">(3)</span>(6)');
        $('.count_warlock').css('display', 'inline');
    }

    if (hunter < 3) {
        $('.hunter_synergy').text("(3)(6)");
        $('.count_hunter').css('display', 'none');
    } else if (hunter >= 6) {
        $('.hunter_synergy').html('<span style="color:white;">(3)(6)</span>');
    } else if (hunter >= 3) {
        $('.hunter_synergy').html('<span style="color:white;">(3)</span>(6)');
        $('.count_hunter').css('display', 'inline');
    }

    if (knight < 2) {
        $('.knight_synergy').text("(2)(4)(6)");
        $('.count_knight').css('display', 'none');
    } else if (knight >= 6) {
        $('.knight_synergy').html('<span style="color:white;">(2)(4)(6)</span>');
    } else if (knight >= 4) {
        $('.knight_synergy').html('<span style="color:white;">(2)(4)</span>(6)');
    } else if (knight >= 2) {
        $('.knight_synergy').html('<span style="color:white;">(2)</span>(4)(6)');
        $('.count_knight').css('display', 'inline');
    }

    if (mech < 2) {
        $('.mech_synergy').text("(2)(4)");
        $('.count_mech').css('display', 'none');
    } else if (mech >= 4) {
        $('.mech_synergy').html('<span style="color:white;">(2)(4)</span>');
    } else if (mech >= 2) {
        $('.mech_synergy').html('<span style="color:white;">(2)</span>(4)');
        $('.count_mech').css('display', 'inline');
    }

    if (druid < 2) {
        $('.druid_synergy').text("(2)(4)");
        $('.count_druid').css('display', 'none');
    } else if (druid >= 4) {
        $('.druid_synergy').html('<span style="color:white;">(2)(4)</span>');
    } else if (druid >= 2) {
        $('.druid_synergy').html('<span style="color:white;">(2)</span>(4)');
        $('.count_druid').css('display', 'inline');
    }

    if (demonhunter < 1) {
        $('.demonhunter_synergy').text("(1)(2)");
        $('.count_demonhunter').css('display', 'none');
    } else if (demonhunter == 1) {
        $('.demonhunter_synergy').html('<span style="color:white;">(1)</span>(2)');
        $('.count_demonhunter').css('display', 'inline');
    } else if (demonhunter == 2) {
        $('.demonhunter_synergy').html('<span style="color:white;">(1)(2)</span>');
    }

    if (shaman < 2) {
        $('.shaman_synergy').text("(2)");
        $('.count_shaman').css('display', 'none');
    } else if (shaman == 2) {
        $('.shaman_synergy').html('<span style="color:white;">(2)</span>');
        $('.count_shaman').css('display', 'inline');
    }

    if (god < 1) {
        $('.god_synergy').text("(1)(2)");
        $('.count_god').css('display', 'none');
    } else if (shaman == 1) {
        $('.god_synergy').html('<span style="color:white;">(1)</span>(2)');
        $('.count_god').css('display', 'inline');
    } else if (shaman == 2) {
        $('.god_synergy').html('<span style="color:white;">(1)(2)</span>');
    }
}
