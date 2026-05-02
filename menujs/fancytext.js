

$("body").append('<style>.swal2-container{font-family: "Courier New";}</style>');
$("body").append('<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>');
alert("Right click to access the funk.");
setTimeout(function() {
    var font = "1234567890-=!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[]\\;',./{}|:<>?\"";
    var _b = "1234567890-=!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[]\\;',./{}|:<>?\"₁₂₃₄₅₆₇₈₉₀‐₌！＠＃＄％^＆*()_+ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ[]\\;',‧/{}|:<>?\"₁₂₃₄₅₆₇₈₉₀‐₌！＠＃＄％^＆*₍₎_+ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᵃᵇᶜᵈᵉᶠᵍʰᶥʲᵏˡᵐᵑᵒᵖᶲʳˢᵗᶸᵛʷˣʸᶼ[]\\;',‧/{}|:<>?\"ƖᄅƐㄣϛ9ㄥ860-=¡@#$%^⅋*)(‾+ⱯᗺƆⱭƎⅎפHIſʞႢWNOԀರᴚS⊥∩ΛMX۸Zɐqɔpǝɟƃɥḹɾʞɭɯuodbɹsʇnʌʍxʎz][\\;,'˙/{}|:<>¿\"";
    var left = jQuery.Event("keydown");
    left.which = $.ui.keyCode.LEFT
    left.keyCode = $.ui.keyCode.LEFT
    $('body').on('contextmenu.funky', funkyTextMenu);

    function funkyTextMenu(e) {
        e.preventDefault()
        Swal.fire({
            title: 'Funky Text Replacer',
            footer: '<small>Directions: Select your funky text and replace letters by using your arrow keys.</small>',
            input: 'select',
            inputOptions: {
                Default: 'Default',
                Large: 'Large',
                Small: 'Small',
                Upsidedown: 'Upsidedown'
            },
            inputPlaceholder: 'Select a Funk',
            showCancelButton: true,
            inputValidator: (value) => {
                if (value === 'Default') {
                    font = "1234567890-=!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[]\\;',./{}|:<>?\"1234567890-=!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[]\\;',./{}|:<>?\"1234567890-=!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[]\\;',./{}|:<>?\"1234567890-=!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[]\\;',./{}|:<>?\"";
                }
                if (value === 'Large') {
                    font = "₁₂₃₄₅₆₇₈₉₀‐₌！＠＃＄％^＆*()_+ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ[]\\;',‧/{}|:<>?\"₁₂₃₄₅₆₇₈₉₀‐₌！＠＃＄％^＆*()_+ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ[]\\;',‧/{}|:<>?\"₁₂₃₄₅₆₇₈₉₀‐₌！＠＃＄％^＆*()_+ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ[]\\;',‧/{}|:<>?\"₁₂₃₄₅₆₇₈₉₀‐₌！＠＃＄％^＆*()_+ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ[]\\;',‧/{}|:<>?\"";
                }
                if (value === 'Small') {
                    font = "₁₂₃₄₅₆₇₈₉₀‐₌！＠＃＄％^＆*₍₎_+ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᵃᵇᶜᵈᵉᶠᵍʰᶥʲᵏˡᵐᵑᵒᵖᶲʳˢᵗᶸᵛʷˣʸᶼ[]\\;',‧/{}|:<>?\"₁₂₃₄₅₆₇₈₉₀‐₌！＠＃＄％^＆*₍₎_+ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᵃᵇᶜᵈᵉᶠᵍʰᶥʲᵏˡᵐᵑᵒᵖᶲʳˢᵗᶸᵛʷˣʸᶼ[]\\;',‧/{}|:<>?\"₁₂₃₄₅₆₇₈₉₀‐₌！＠＃＄％^＆*₍₎_+ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᵃᵇᶜᵈᵉᶠᵍʰᶥʲᵏˡᵐᵑᵒᵖᶲʳˢᵗᶸᵛʷˣʸᶼ[]\\;',‧/{}|:<>?\"₁₂₃₄₅₆₇₈₉₀‐₌！＠＃＄％^＆*₍₎_+ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᵃᵇᶜᵈᵉᶠᵍʰᶥʲᵏˡᵐᵑᵒᵖᶲʳˢᵗᶸᵛʷˣʸᶼ[]\\;',‧/{}|:<>?\"";
                }
                if (value === 'Upsidedown') {
                    font = "ƖᄅƐㄣϛ9ㄥ860-=¡@#$%^⅋*)(‾+ⱯᗺƆⱭƎⅎפHIſʞႢWNOԀರᴚS⊥∩ΛMX۸Zɐqɔpǝɟƃɥḹɾʞɭɯuodbɹsʇnʌʍxʎz][\\;,'˙/{}|:<>¿\"ƖᄅƐㄣϛ9ㄥ860-=¡@#$%^⅋*)(‾+ⱯᗺƆⱭƎⅎפHIſʞႢWNOԀರᴚS⊥∩ΛMX۸Zɐqɔpǝɟƃɥḹɾʞɭɯuodbɹsʇnʌʍxʎz][\\;,'˙/{}|:<>¿\"ƖᄅƐㄣϛ9ㄥ860-=¡@#$%^⅋*)(‾+ⱯᗺƆⱭƎⅎפHIſʞႢWNOԀರᴚS⊥∩ΛMX۸Zɐqɔpǝɟƃɥḹɾʞɭɯuodbɹsʇnʌʍxʎz][\\;,'˙/{}|:<>¿\"ƖᄅƐㄣϛ9ㄥ860-=¡@#$%^⅋*)(‾+ⱯᗺƆⱭƎⅎפHIſʞႢWNOԀರᴚS⊥∩ΛMX۸Zɐqɔpǝɟƃɥḹɾʞɭɯuodbɹsʇnʌʍxʎz][\\;,'˙/{}|:<>¿\"";
                }
            }
        })
    }
    $(document).on("keyup.funky", function(e) {
        if (e.key == "ArrowRight") {
            if (($(".active-cursor")[0].innerText) !== " " && ($(".active-cursor")[0].innerText) !== " ") {
                var h = ($(".active-cursor")[0].innerText)
                var j = _b.indexOf(h);
                var r = font.charAt(j)
                r += j >= 0 ? ($($("textarea")[0]).val(font.charAt(j))) : font.charAt(j);
                setTimeout(function() {
                    $($("textarea")[0]).trigger(left);
                }, 10)
            }
        }
    
})
}, 1000);