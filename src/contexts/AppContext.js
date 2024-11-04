import React, { createContext, useContext, useState, useMemo } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [selectedChannelType, setSelectedChannelType] = useState('TV');

    const channels = useMemo(() => ['KBS', 'MBC', 'SBS', 'EBS'], []);

    const subChannels = useMemo(() => ({
        KBS: {
            TV: [
                { id: 'kbs1', name: 'KBS 1' },
                { id: 'kbs2', name: 'KBS 2' },
                { id: 'kbs-news', name: 'KBS NEWS' },
                { id: 'kbs-drama', name: 'KBS Drama' },
                { id: 'kbs-joy', name: 'KBS Joy' },
                { id: 'kbs-story', name: 'KBS Story' },
                { id: 'kbs-life', name: 'KBS Life' },
                { id: 'kbs-kids', name: 'KBS Kids' },
                { id: 'dokdo', name: '독도라이브' },
                { id: 'kbs-world', name: 'KBS WORLD' },
            ],
            Radio: [
                { id: 'radio1', name: '1Radio' },
                { id: 'happy-fm', name: 'Happy FM' },
                { id: 'radio3', name: '3Radio' },
                { id: 'classic-fm', name: 'Classic FM' },
                { id: 'cool-fm', name: 'Cool FM' },
                { id: 'hanminjok', name: '한민족방송' },
                { id: 'world-multi', name: 'KBS WORLD MULTILINGUAL' },
                { id: 'world-eng', name: 'KBS WORLD ENGLISH' },
            ]
        },
        MBC: {
            TV: [
                { id: 'mbc', name: 'MBC' },
                { id: 'mbc-every1', name: 'MBC every1' },
                { id: 'mbc-drama', name: 'MBC DRAMA' },
                { id: 'mbc-m', name: 'MBC M' },
                { id: 'mbc-on', name: 'MBC ON' },
                { id: 'mbc-net', name: 'MBC NET' },
            ],
            Radio: [
                { id: 'normfm', name: '표준FM' },
                { id: 'fm4u', name: 'FM4U' },
                { id: 'allthat-music', name: '올댓뮤직' },
            ]
        },
        SBS: {
            TV: [
                { id: 'sbs', name: 'SBS' },
                { id: 'sbs-plus', name: 'SBS Plus' },
                { id: 'sbs-fune', name: 'SBS funE' },
                { id: 'sbs-sports', name: 'SBS Sports' },
                { id: 'sbs-golf', name: 'SBS Golf' },
                { id: 'sbs-golf2', name: 'SBS Golf2' },
                { id: 'sbs-biz', name: 'SBS BIZ' },
                { id: 'sbs-m', name: 'SBS M' },
                { id: 'sbs-fil', name: 'SBS FiL' },
                { id: 'k-pop', name: 'K POP' },
            ],
            Radio: [
                { id: 'power-fm', name: 'POWER FM' },
                { id: 'love-fm', name: 'LOVE FM' },
                { id: 'gorillam', name: '고릴라M' },
            ]
        },
        EBS: {
            TV: [
                { id: 'ebs1', name: 'EBS1' },
                { id: 'ebs2', name: 'EBS2' },
                { id: 'ebs-kids', name: 'EBS KIDS' },
                { id: 'plus1', name: 'PLUS1' },
                { id: 'plus2', name: 'PLUS2' },
                { id: 'ebse', name: 'EBSe' },
            ],
            Radio: [
                { id: 'ebs-fm', name: 'EBS FM' },
                { id: 'bandi-fl', name: '반디 외국어 전문' },
            ]
        }
    }), []);

    const streams = useMemo(() => ({
        // KBS
        'kbs1': "https://1tv.gscdn.kbs.co.kr/1tv_3.m3u8?Expires=1730817654&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly8xdHYuZ3NjZG4ua2JzLmNvLmtyLzF0dl8zLm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MzA4MTc2NTR9fX1dfQ__&Signature=bcKXzGDS5xqFhFdWErSVROVEbcBAnSF-5WLGRNvEsix~GxbOVlE3wz9XR8mVuVAknPSxWZQ4WCk8MmR46YQ4~f5t6PZXSK8BSnlnoH2VdQPZx2orVYY5qNnVbGa9UkP0xqWA~mU17sdH4XE-Bxt9vdNK91~DTh-cFwAkcafIzXCHWM~3cOX1q9djic2WKKpq35y2nJEZ1CtkNF1twmEhJ8t~iW~9JxKP3cE1GejxuBWbHfi2c7fyVrqibe4MOkRZLuFkYyNeuAxwoSYiOOCW2X6N5LLJdmeNdq7lmtwcV2kBGHD1dv64nHyCcmavIMpebNFuuNuhVlFc2ClLEpLBiA__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'kbs2': "https://2tv.gscdn.kbs.co.kr/2tv_1.m3u8?Expires=1730817682&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly8ydHYuZ3NjZG4ua2JzLmNvLmtyLzJ0dl8xLm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MzA4MTc2ODJ9fX1dfQ__&Signature=Gsb6BX0xausK9n8~aiPDzhivbbhVpt0kFXfeypiB3Vzz3R9LwRPKrThQKNObadtVzgIUjqTkapBpkqzEX2piECLHtQUZGKTXYuyHZpyme1q37gp~pLG7exxpqUT5imvGQ5t8Ip3FgGXb3yppVnc6KB2qeMf-D03dgbb1SMUaq2t7BCuyy4tpzEbUuAIo5e-XviBs3PZBplXqoYbPvOImGZgXNiMDhEoo3MSJKuVM-Gk8vRFq8LnypkjUNs9W4R5X9BVosBy-w8XF3VS6n~mMVaZEWMbyzsd0bfoP-qsjM24vHGHX20JfAohhhT~APKEwU3B16ASr9PhEE5zVY9RLNQ__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'kbs-news': "https://news24.gscdn.kbs.co.kr/news24-02/news24-02_hd.m3u8?Expires=1730817563&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9uZXdzMjQuZ3NjZG4ua2JzLmNvLmtyL25ld3MyNC0wMi9uZXdzMjQtMDJfaGQubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDgxNzU2M319fV19&Signature=mNtdb10Gwi6U7oRXBlpC5CTznZud3RCoTWc4CPNaz~8hBATevdNLrt~-cSA4ejQeOzIBdwXYJNCBd9qXiZwqbhh1EaR4yAB9u3UgMEbEqRqJHW3IzYKtXTo5ilEGqji~HhqmysIeb13TTt0KwOSkClbWNWhQBx78xOmNZj4sHaIjhSIc9Yk5YlNIcjWhe7xji3Iy-nZsYp3Md2w1yIa0jogeyOtoGy8cQo1twYdiEC2eD3n8EhtMUugqnq-z3N6pYVJUy5KP9iXl3lN6rIEeicCfif0MdaHlLsADjBgKApD80chg97zXEFvVxScLLrcWbC5T61wZDE9Q3o2eMxWG~g__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'kbs-drama': "https://kbsndrama.gscdn.kbs.co.kr/kbsndrama-02/kbsndrama-02_sd.m3u8?Expires=1730817638&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9rYnNuZHJhbWEuZ3NjZG4ua2JzLmNvLmtyL2tic25kcmFtYS0wMi9rYnNuZHJhbWEtMDJfc2QubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDgxNzYzOH19fV19&Signature=e8R6uyJzdo18Z5HdvQ28xI542JRhqvS6pmKH0rdPsDTNk6Qh40OhjnAcFG-2cVdifHM0JOd8rYqyEwpfohAOYp-PwyX6~IVzt1V6xjj5ZaEd4B1TlELnje0H2CSj72f5OIQi5yW4qdxMxbNbInTjudjebPaXzcRXrN5emT3BXX7MxLzKiUxTzBtowfLW26Br-dPn66b1at0rfM1FMwF6GD1pPTqXjgH~xMEJZOo6jFhLq1zm9~-TUEyoZWeV1fyurzh6J-uXaAxmfioPqiT8tRAwBfgt1IX1MVkIbnlWaMB5GBDfLj~wprB5mCPV-kFR599HIYvQCPgl6Bq8njk7ug__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'kbs-joy': "https://kbsnjoy.gscdn.kbs.co.kr/kbsnjoy-02/kbsnjoy-02_sd.m3u8?Expires=1730817762&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9rYnNuam95LmdzY2RuLmticy5jby5rci9rYnNuam95LTAyL2tic25qb3ktMDJfc2QubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDgxNzc2Mn19fV19&Signature=aODcWGUYVENmPNTlwLW39dJouK8NT2cd30nlDAsxOxco99Dd1u0TV6IwLJaGW3nNUihcYIfsqMrQ6htB8B11ygYT3qKfbNXooVqIz2Q8sYB-zFW0TU-Of~6Bt8btn3dV6vljgaLh4p3CT4R-3zx5siUN-UpnKqAsaKGF6-k5lXa55wqj~P0BdFfBx09TpUOywhh8-MusHs0qpB-~AVkG4EyG0JLyYvt4CNO7gYkv~K9K89frg43hpG7EUeSa0JsA8aOmVUC3KLDrzkn1BbHmHAnoxTygam4Jou6ER6SPxRr0eHoAPyhZsESZI8PNMAVRifDrkywaNH044oAmSbXFAQ__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'kbs-story': "https://kbsnw.gscdn.kbs.co.kr/kbsnw-02/kbsnw-02_sd.m3u8?Expires=1730817746&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9rYnNudy5nc2Nkbi5rYnMuY28ua3Iva2JzbnctMDIva2JzbnctMDJfc2QubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDgxNzc0Nn19fV19&Signature=fekzMWynrsEl1~g4z0vRBCbOjPZ9WO034~QTeHMxPuATPyHTLoiA61aMUmewpbdTE5ivlopN9ewlry95dxDTZw177DveUnvJAIbRaB1aS-P7RveCI~mIxfIP3bsLF98CZ2AupS5k5V0Sv5cm82Anrqfhf7-lwtqp7ZTrQcfq3WaNz5yhL23lMHMSFag7rAHuz8JP1WUOC-4218OPBpH3wLwd3OspFLdMuqVYWhBHbkqEJGat2MRjbmBKYUNT4C~DaBQ~ALX74~vFObWgrug9BqJinIfvLpy1WjnQofzDZttzgy7lD6wTNnvL5iV5~iPfuooFDa-nwaPGQTFhzMaqZA__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'kbs-life': "https://kbsnlife.gscdn.kbs.co.kr/kbsnlife-02/kbsnlife-02_sd.m3u8?Expires=1730817803&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9rYnNubGlmZS5nc2Nkbi5rYnMuY28ua3Iva2JzbmxpZmUtMDIva2JzbmxpZmUtMDJfc2QubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDgxNzgwM319fV19&Signature=mIffErrdoUc5nX2no8u9iFFydh3dPPmMu89jJ9MJHR6D~Wpa5fpqX8~PNvP0MVvtQcscL8O7jKQ~kXO6em3gxv3~YYND0vgRm6bpj4iSwv7aYA~7u9TUIIrtgWMMeq4SM9xidwbAqgLxzJxPVPoaZqu-bEETC~y14t3R0S-hOFeHNvQWlDCdohFWC~V-ZcRXtWyHEu11cBtSmeDiewRF7MAHYGYDiC4U0AYqVj4yaaL09tcSgenmdUMXUpKYrWFTmRxryA2UfQCMR9IVDXGf3WRB7zl7aPVAj3ex4yyIdTHmGQxCsOKDYopTCIbAHUEUD0q6cp1vvOOT-6ZyRn0niw__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'kbs-kids': "https://kbsnkids.gscdn.kbs.co.kr/kbsnkids-02/kbsnkids-02_sd.m3u8?Expires=1730817814&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9rYnNua2lkcy5nc2Nkbi5rYnMuY28ua3Iva2JzbmtpZHMtMDIva2JzbmtpZHMtMDJfc2QubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDgxNzgxNH19fV19&Signature=SA93DfKOQ0QYhDOnKNTm4t0zmhhr06hPchQcL0yxuHjN6CIUdeyK5cL-QjGc4FNYiGRcQl4c3Jj4zi7vFIaOp1e3BG-UgeVLcJi2StBWIxGpAlDM7NSS4KUHBc7A6~VeYJheb~O5n-kksGIpRpXYWuCHu1F-hok5pFhBaqBatiZ1TpL4LicchqPcrIvPnwyZO1jMrTzxsMoCxf1R087eMoAEWGP5P-Z-6pkzdjp5zI3k45mhGIjwTEYpJa8IYZ9PIwZNuUIZc0shBIOpTuiNH8ssIwkkoFFp~fiFFc6anJ0Dc9XMaO-MRwzH1vI2ELkPP4YZMhDBjCTSS2y2Ussbrg__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'dokdo': "https://kbs-dokdo.gscdn.kbs.co.kr/myk_SD/kbs/chunklist.m3u8",
        'kbs-world': "https://world.gscdn.kbs.co.kr/world-02/world-02_sd.m3u8?Expires=1730817910&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly93b3JsZC5nc2Nkbi5rYnMuY28ua3Ivd29ybGQtMDIvd29ybGQtMDJfc2QubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDgxNzkxMH19fV19&Signature=HrY6oWXlbCz6fapZW7UPdJ2mr0JpHjehL2dq7ixZ9EMTVcPD1Z38a80cGSw68PyAGJt7Eqo8XkQnWuFyffyCB7QPhOb2U7ytg354HIxqkXiNf~LDLZmCTzWcLT45ZEt3XSSdFXfXfkxXSJLWmCoNuIfT1F~vkOWzT12poHYxvxZ-veHaf0DaONiR-NtRlJTmiMMaJ9fm-iUP0ek9zJ-dfx0~M5qs0I9CJg8I1vBtO2b9KgQp4Ddp7LqDpt-JfdusHPn74fkFZeOAdJYW7PODL5ZAFUDaQnEUZwIkYTP2sY7-eOh5CxNHSknSdGMSOz2THU4R4DehBG8qZJsm8Gx70w__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'radio1': "https://1radio.gscdn.kbs.co.kr/1radio_192_4.m3u8?Expires=1730818347&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly8xcmFkaW8uZ3NjZG4ua2JzLmNvLmtyLzFyYWRpb18xOTJfNC5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzMwODE4MzQ3fX19XX0_&Signature=MxjbZI~NfHbTFOt7JFch3y7f14htUF5Iw7nvBnnWJ6G-zKbhEHQDKis54ZoRYK5xQulmB-lSfdJqjAHLhBTn~c4OB~F8Jjo7jruM09xZ9X0RK0sprdKcwVR4rlta8w6AyhGRgys88PgEVBP3niWgd-67ZcSSrC2I1YKnD3r3Zcb~OxA2hdpPagnWYPXQHwC33yWvC3OyiaxbGVqNJwBbX6rlF0-DcmHFm20t6nEm5bYicZnfnKv1J0iacEg-Rk6kqO2~AJQcaSQZSIUcqVCkNrcQDqfkLEiTUSwz82k5ni4cue3ZcuP3s4ZdINv887mwIgxMP8n3YDJOM1TvKldT-w__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'happy-fm': "https://2radio-ad.gscdn.kbs.co.kr/2radio_ad_192_1.m3u8?Expires=1730818418&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly8ycmFkaW8tYWQuZ3NjZG4ua2JzLmNvLmtyLzJyYWRpb19hZF8xOTJfMS5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzMwODE4NDE4fX19XX0_&Signature=hWEXvY7Cyla~yy2EUEjSPS~yh5nxAa6FSgUgVUOyKiJvHDAZQcf1jiyq5eE7iL6HgW9AyF9h6t8usbots7tUp0cPOxON1sZu3xAvm8rKHfMWnarLpFIL3ascSKBhdhb5cW95yooCh4Y6TVw3FEF5MkMiv1ir96q9bqgt8H4A46ZHzQgNo9bHMhHdlI1-wagaj0pD7-9BReKu2l7tr8w~IAoNUFHwwXx~rtSRNxM1ggEbpPoa4AzbdzjzfegmNpi4DBdIEjmg5~LX5w8x6zJ00E8T07F2WGNtNGuuR2vgAYIXRdz5-PbuMHkL1B5wVi0vco2SCDpwi3XcjSoWbAaB9A__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'radio3': "https://3radio.gscdn.kbs.co.kr/3radio_192_3.m3u8?Expires=1730818552&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly8zcmFkaW8uZ3NjZG4ua2JzLmNvLmtyLzNyYWRpb18xOTJfMy5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzMwODE4NTUyfX19XX0_&Signature=IIE85l3RvnseATKN3b72xf0F9D3~AnV1SRjU5MNZyLgBEkKvSqfjepixZ4WMxSFhDVuVzjjIQnhVN2e7JcuL40vvUYDNJt5jigVsc6yAWVHtd9fpfISGfu~Ndb3Q8DOgHziByq6wG7MESSHaSQfa4-R~7tQaXV2fz-aAD5Lvo9l3t8osU7q6PfrfXVgmEAK-SKzJhvSbnTIZC0qzZwJZvKjAMHlJaKt3SSU4de-NiHtdhfekMiXDFgS-Ey0t0rlRlXse4DsRbYU7QgiAYxNtWKVWmPUEGQ88~Ec1a9YhbBDXLYlzvflumWwDz6xd5XCyYIYig~JAWzrmao~4qTEPNQ__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'classic-fm': "https://1fm.gscdn.kbs.co.kr/1fm_192_2.m3u8?Expires=1730818583&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly8xZm0uZ3NjZG4ua2JzLmNvLmtyLzFmbV8xOTJfMi5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzMwODE4NTgzfX19XX0_&Signature=KGe7h7xka3dq2fXiOPvXVL2EItVXeaULAulWVw~QHh5XLLhf8We1e~Qh0Fp4KgK1IJgjajUbCM3bEhFQsinRurAkwvewWxRb7Al7ir7Z3g8h4rgFzqhr4CUdmYvuVYPlBugtZIQDtddIjSBgyelRZWfCR0h3-MZozan3PfLhKTzASdbvszMV4ZwRPmdcu5sqUykVZGfwzT9msSNjrgX5n8AnVg2Z5sAs2Co87mGs5qGSUC0UVsZhE6oHDB-XD-wvwcRhTUvZSHDl-XcZyjq0u7RldCR~xUxItIltIbTcTeZaY~hrbfUQDMs3X6XBa5c32JFkgmxNtr2e5yt7b3u3DA__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'cool-fm': "https://2fm-ad.gscdn.kbs.co.kr/2fm_ad_192_1.m3u8?Expires=1730818592&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly8yZm0tYWQuZ3NjZG4ua2JzLmNvLmtyLzJmbV9hZF8xOTJfMS5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzMwODE4NTkyfX19XX0_&Signature=K9tfcJIL-bE3HJ9ycnudukLbhwM-p9jLqY~PUInisntwjL27KSd73rE4CRrhMk48suFO8xJIgzTEMa0E7BrAOs1pgcomuG-WIYSHht4rJ~On3U0iyg7a20b6CQ08WEjVJt3RNSe4rD~Jrv2ykXt1XzwN0yJlhxOPCQKQItXfolYbUNqZI8p7a6Km2fHQ4mlyKZTrwJInsaewLg77zwK7f4~my65nA7crbL7P7ebWlDS-O~UeS3Dkx-XZAt7ntTG-H8m0ov2N5b6E--8T~3YB3l3o~4f7-9OKDwzMpIXaiIPrQqLutJID1kPPIp1vRjFNe9sXIIZCkUqUeiEC8lKwGA__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'hanminjok': "https://hanminjokradio.gscdn.kbs.co.kr/hanminjokradio_192_2.m3u8?Expires=1730818562&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9oYW5taW5qb2tyYWRpby5nc2Nkbi5rYnMuY28ua3IvaGFubWluam9rcmFkaW9fMTkyXzIubTN1OCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTczMDgxODU2Mn19fV19&Signature=hkB6KNEzU9INNOfLHF1hm2FywDXswP7gGFUk44deKp4xFEsXEgc93U-je5Knw1pZBFGm9WcIMmbVDX1MsgvmXxmbxTLQKeCiXssD8tdMF7yf36-m-1xIUsSL5xva174wkjQDRlTX1Q0k5bCxntp55CX4B6svmbCgriLgs7tqAkAgp2NWln2YUSqEDLtXAAGZqyddGMZttHyQ10~jqcH-Gbq3sTVKAumdqxCbPPXCIHi-J5gl~eRorVdn7XjLkatQytEJSfowpHdLxvcR8teUDwppU0zYfeVhOQ2IyR5e6zDhB8ZGdy~p-VNde0Tp-2CHfb7VBROsckgWArg35jm5Ng__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'world-multi': "https://wink11.gscdn.kbs.co.kr/ch1_64_2.m3u8?Expires=1730818653&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly93aW5rMTEuZ3NjZG4ua2JzLmNvLmtyL2NoMV82NF8yLm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MzA4MTg2NTN9fX1dfQ__&Signature=n6yjT0x~1jUi4KsnE7L8ZT2eAStCy59R9UNuKEYrZvx6Gfin5UDZCvO1oQFVMoMQO5GFRVQ-3tDurJvfpUeJSJKJ-QtY35jWwm7wK7bhbmMiUom0wX7Mt~w7i1F35EcmKK2ZA~T0-W6MMdjaVrKAY7gD6XlcD4E9KXVyiKxWuRxBd5uOlIngA8eUEgjxa11czmqIN~EmszCbsd7EKutTbcHPgkQ9aF24dWTKFUpnml46EjKl16qSz5FYjP5fMqcpG9kKf3RxpnWOx0~pLE~8X-v5w0uBcY5AFcH3bhw26mtTUK3PVapnr2xfy1rs1j7DuhM~3vuRUN3dkLnQ-CqxTg__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",
        'world-eng': "https://worldradio.gscdn.kbs.co.kr/worldradio_192_4.m3u8?Expires=1730818715&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly93b3JsZHJhZGlvLmdzY2RuLmticy5jby5rci93b3JsZHJhZGlvXzE5Ml80Lm0zdTgiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MzA4MTg3MTV9fX1dfQ__&Signature=MqOUGGPoMqg1nRKe34YYufRcSx2Ale3MI9aPfz1K-1kvxuYAywIAg7eYNoDYR8htr6wFlkUIZ9hePj2QjFuABH1A1tQ9RmzW2Y8Ili93CIS0m-gjqnWLqK4CiC~ZdC~drHydp-NSg4PGRbsacHpJWo4QxZqBLLgRppR1fOnVHu1R4-~wTQpjTO5JX8pySatI3FTy5Dh1XjG71CUL3CEkq~MeI-BNChOwEUbAkh0cwRdsDoM8TMPs9BRbAHwqVqGVp-0hzDwJurHmaiLkwBn0IcvWJkpkaIG3xmwo13ZUfW-UvVYNUDBfVuwiXxCf5hcglI9jMzk-Ttr0dnQHD0piYg__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA",

        // MBC
        'mbc': "https://m-ottlivesd.imbc.com/ottlive_sd/_definst_/ottlive_sd.stream/chunklist.m3u8?_lsu_sa_=61919A11D37538449A4A65F13F51BE40F57F3885BA00822636E0E9aE56033E96BCaEB30935F2B848307934411Cb221675886186E020E75B18CBB7908FBB98C397310E0646069F91785967178B200DE6BE737D55F86206A99FE9833C2F52CED410FFFE0839306F19040A75FF7251EA353CF35EC1E6D7D6C512358A306D657A70E&v=3",
        'mbc-every1': "https://m-every1ottsd.imbc.com/plus_every1_sd/_definst_/every1_sd.stream/chunklist.m3u8?_lsu_sa_=6F61D31E93023784D749F5DA39015C4F65883825F50822253380A8aF56643C86A1a5B3433DB23C44305A39815FbFC13E0A540B928630CA6E8ACECDEA0B8ED0CB04329DB1326917E4AE994D0D75056D71E1C330F049A69DAE83F75C3DFA23D23BE6966B4A9833CE34E5F2B63EE0103D8D6AE85E1F61B72BC6F0890D2EF153E527&v=3",
        'mbc-drama': "https://m-dramaottsd.imbc.com/plus_drama_sd/_definst_/drama_sd.stream/chunklist.m3u8?_lsu_sa_=60E17811339D34745842751B33C1324CE51138154D0FC2EC34D0CEa0A64332B6FCa9F3863EE2CB4CE0DF3221D1b06199BAF2D6100E9B65C128BD26097A7CB03E4C9839E0A9763365E4EFB9EC1CAE5046C1E3D9CF8431C07798342FE3C1DC473CC9D59AB561AD9910C0D687122E7B04CEFD4A3E0888A650192A4EF42ADEBDA6B8&v=3",
        'mbc-m': "https://m-mbcmottsd.imbc.com/plus_mbcm_sd/_definst_/mbcm_sd.stream/chunklist.m3u8?_lsu_sa_=6E610F16C3E03BC4CF4A55EE3271B44A252335F5E60D42983C5030a456513936FEaF538D3E72D24CF031323189bAD100DF35DBB92E8FD66CD428F5E3EB438A6ECBB83982F7A3AAD27F00DBEDCA6F7F2D5AE8BE8465F11C96E333DE3CD530A66BFB40CBAE9072BCFD8A458B284D73F88F&v=3",
        'mbc-on': "https://m-mbconottsd.imbc.com/plus_mbcon_sd/_definst_/mbcon_sd.stream/chunklist.m3u8?_lsu_sa_=60E16C1F738038C43944758035D13C4D45E53055130182F03BB0C6aFF61E323630a1A3DD3AE2E94BA08732919Cb2813D3CDE37D44E26039EF76E0754A9F7558C14C47641BC801CEA36364C064E2D611EF83D164E16D6DC0200E5853C82B452F2AD0A54C1B0CF5CDE8A3C1B3D4937804669E8C5837254F7A139189917227F55D6&v=3",
        'mbc-net': "https://m-mbcnetlive.imbc.com/mbcnet_onair/_definst_/mbcnet_500k.stream/chunklist.m3u8?_lsu_sa_=6D11121C43C33084284815A73F61084FC5B63C258606F29B30A0DBaF36CB34E605a1E3F03E32084DC0B23201F9bDB1FDA4BA0D8E34410C462D94AD5D0BC32F5F1ACC78043312788AD2399FB81B814B7EA8696F8ED3994384CEB929C14305D1A9129C1DFF6D11DD44FFBE2D0DF8A8098B5DE74A519ADAA222542A095A08D96504&v=3",
        'normfm': "https://minisw.imbc.com/dsfm/_definst_/sfm.stream/chunklist.m3u8?_lsu_sa_=6FE1CF1133C63FC4DF43F5C93861D140B54439452C0492C83D60FFa076BF3F76DEa2B3D236B2F54ED06F3D912CbD31C29DEECB442129B2C8C53A384514B2945922051591210970860152DFE2C6916D81E12A8DF77912FFA55DA95C5342DA8F8B771DB03E4D283B94FE0EE7ABD8076B32",
        'fm4u': "https://minimw.imbc.com/dmfm/_definst_/mfm.stream/chunklist.m3u8?_lsu_sa_=6CD1711E234631646543954E33F1EB4DD5EB31F5230642B13DD0A0a7D61A3866E1aA83423AC21B4500263CB18Ab3411E21B7DE25827ECC3501D6986C87E8A9FF852F1F9FD446450E6A924409E2DF0BDFC0D22BA65C7377AA2C856EC602BF473C49B339CFBF9CE707A11B4C0A7E7C8744",
        'allthat-music': "https://minicw.imbc.com/dchm/_definst_/chm.stream/chunklist.m3u8?_lsu_sa_=69219615F3F231744947A5773E71F04805203255850642C332503DaD56A23EC652a7D31830724B4820E73E1137b3314E52EDD8284ED2F1BA7448D61D7E6942A56D2FA67DDBFF4E4BF721ED5850AA27F38E4032A6526D9ECF423864BA2A021907985211A7565FA721E176A2CDEA8F09FF",

        // SBS
        'sbs': "https://tvlive.sbs.co.kr/sbsch6/sbsch62.stream/chunklist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzA2OTQ5NDQsInBhdGgiOiIvc2JzY2g2Mi5zdHJlYW0iLCJkdXJhdGlvbiI6LTEsInVubyI6ImZjNGUyYTMzLTRhZWUtNDJjNi1iNzMxLTNhZjI0NTRlZDlkZCIsImlhdCI6MTczMDY4Nzc0NH0._aXkbCdE02w9Yd2aPKdZv472B8ltMerR8HIbI6ejtLU&solsessionid=a0d05e0e1fdeb475ef970252e67cbd2b",
        'sbs-plus': "https://tvlive.sbs.co.kr/sbspluspc/sbsplus2.stream/chunklist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzA2OTUwMDMsInBhdGgiOiIvc2JzcGx1czIuc3RyZWFtIiwiZHVyYXRpb24iOi0xLCJ1bm8iOiJkZWNhMDMwOC03NTQxLTRhZGUtYmFmYi1kYzNkOTk2MWM0YzYiLCJpYXQiOjE3MzA2ODc4MDN9.wcGQO_KaKUTUGWU9QSNpdrg9XCmrJlDt_QrDmbH-D7w&solsessionid=d83c558fbaa32f63b59668d9c42f064f",
        'sbs-fune': "https://tvlive.sbs.co.kr/sbsetvpc/sbsetv2.stream/chunklist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzA2OTUwNjYsInBhdGgiOiIvc2JzZXR2Mi5zdHJlYW0iLCJkdXJhdGlvbiI6LTEsInVubyI6ImI2ZTA5Njc0LTk3NmYtNGRjOC1hMzU0LTdhYTg5MDQ4NjU2NSIsImlhdCI6MTczMDY4Nzg2Nn0.iJeEP1G0P3yNB0h3vPs2X4InXS95La4K1za2e_dLqHA&solsessionid=0cb522b07609c90c73366d1976a19ad5",
        'sbs-sports': "https://tvlive.sbs.co.kr/sbsespn/sbsespn2.stream/chunklist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzA2OTUxMzcsInBhdGgiOiIvc2JzZXNwbjIuc3RyZWFtIiwiZHVyYXRpb24iOi0xLCJ1bm8iOiIwNzA3ZjFmYi1lZDRmLTQzZjMtYmI3Ni1hYjI3NGVmMmQ3MWQiLCJpYXQiOjE3MzA2ODc5Mzd9.nCS4Bh2cKMME5SDODRsHNjj6TOCU2i6InHY2qSMsHPI&solsessionid=bf843ba2f1979cd92bfe69f1eb7b3b08",
        'sbs-golf': "https://tvlive.sbs.co.kr/sbsgolf/sbsgolf2.stream/chunklist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzA2OTUyMDcsInBhdGgiOiIvc2JzZ29sZjIuc3RyZWFtIiwiZHVyYXRpb24iOi0xLCJ1bm8iOiJkMTE1NDQyOS1hNzhmLTQyMmEtODUxMC1mZDEzYTRiZDg5ZDEiLCJpYXQiOjE3MzA2ODgwMDd9.7xahM6jhbLAr1ecvh2QCmfHSfnrBUCZVAHmEKmFNITM&solsessionid=71b642d02059df59cedb889fdb29b0e4",
        'sbs-golf2': "https://tvlive.sbs.co.kr/sbsgolf2/sbsgolf22.stream/chunklist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzA2OTUyNjEsInBhdGgiOiIvc2JzZ29sZjIyLnN0cmVhbSIsImR1cmF0aW9uIjotMSwidW5vIjoiNmNmZjQxMGMtNDVkNS00ZWFiLTljYjYtNTEyYWNhM2IzY2ZmIiwiaWF0IjoxNzMwNjg4MDYxfQ.l5eRJLcrdiiMCYU5TxEmuTyaH0PMOMfMvmIAWPhLwFg&solsessionid=29e316ab82db552446269995c6397c8d",
        'sbs-biz': "https://tvlive.sbs.co.kr/sbscnbc/sbscnbc2.stream/chunklist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzA2OTUzMjgsInBhdGgiOiIvc2JzY25iYzIuc3RyZWFtIiwiZHVyYXRpb24iOi0xLCJ1bm8iOiI3YmQzZDQ1Yy00ZGZiLTQ4M2QtOWRlMi0wNzM4ZTlmNmFiNGEiLCJpYXQiOjE3MzA2ODgxMjh9.b8uZ0PbGaGBMBOZ84kd1bPW0Q-BgTd74d5hiOox4x8c&solsessionid=9c2e1cad79bb5523a964c1ec58d81b50",
        'sbs-m': "https://tvlive.sbs.co.kr/sbsmtvpc/sbsmtv2.stream/chunklist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzA2OTU1NDEsInBhdGgiOiIvc2JzbXR2Mi5zdHJlYW0iLCJkdXJhdGlvbiI6LTEsInVubyI6IjQ0MmJiOGEwLWMyY2MtNDIzOS04YzQwLWI1M2M2ZWE1ODZmNiIsImlhdCI6MTczMDY4ODM0MX0.7Cjbu34OxyKTlkG2TZ9YSbkCg0UAXDOeW35H-0SEMEM&solsessionid=663795f81f8969bb73ae78da62baa4fe",
        'sbs-fil': "https://tvlive.sbs.co.kr/sbsfil/sbsfil2.stream/chunklist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzA2OTU1OTgsInBhdGgiOiIvc2JzZmlsMi5zdHJlYW0iLCJkdXJhdGlvbiI6LTEsInVubyI6ImY2Yzg2MWI4LTg1ZmItNDg4YS1iM2UxLTdmYWM3MmU2N2M2ZCIsImlhdCI6MTczMDY4ODM5OH0.1scSRbmD6mb_IszmR9xQPTUIiMsGTurwun9XFrO4Bk4&solsessionid=e82f763cd2964afc2f544d216f41875b",
        'k-pop': "https://tvlive.sbs.co.kr/sbskpop/sbskpop2.stream/chunklist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzA2OTU0MjAsInBhdGgiOiIvc2Jza3BvcDIuc3RyZWFtIiwiZHVyYXRpb24iOi0xLCJ1bm8iOiJmYjMxNzA0Ny0zZWE2LTRkODQtYWUxOC1iMDEyYmYzM2I5Y2UiLCJpYXQiOjE3MzA2ODgyMjB9.PtgSHEOHUqolnw0Oegx7OPQaBZBoLjo2ktx6hLgNU_8&solsessionid=bc9f082ccaf5cf976216cc7351488795",
        'power-fm': "https://radiolive.sbs.co.kr/powerpc/powerfm.stream/chunklist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzA3MzE3MDEsInBhdGgiOiIvcG93ZXJmbS5zdHJlYW0iLCJkdXJhdGlvbiI6LTEsInVubyI6IjU3ODcwMThjLTg2ZDYtNGNjYS1iZTUzLTI4ZGJiZWJmOWM1ZSIsImlhdCI6MTczMDY4ODUwMX0.6xgrEaOptCraL1kVu5mGSUco-dQ7KQliDcb8x1mHlFs&solsessionid=819d2ea48f3067e6ef187fb9dfb932e4",
        'love-fm': "https://radiolive.sbs.co.kr/visuallove/visuallove4.stream/chunklist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzA3MzE3NDEsInBhdGgiOiIvdmlzdWFsbG92ZTQuc3RyZWFtIiwiZHVyYXRpb24iOi0xLCJ1bm8iOiIwNTFkYTdhZS02YTg2LTRhNTItYmEyNC1hN2I5YjRjZTBkNjIiLCJpYXQiOjE3MzA2ODg1NDF9.mh7kkWWm36ALnPL791s0AWrSEPxaipjfj8WaJyIQLHw&solsessionid=10d093fc47601023d359df433cbd3767",
        'gorillam': "https://radiolive.sbs.co.kr/sbsdmbpc/sbsdmb.stream/chunklist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzA3MzE3NzYsInBhdGgiOiIvc2JzZG1iLnN0cmVhbSIsImR1cmF0aW9uIjotMSwidW5vIjoiZjQwM2Q5NjMtZTg3ZC00M2FhLWIyYTItNjJhYzA0YjczYTIzIiwiaWF0IjoxNzMwNjg4NTc2fQ.srx2q2Zy63y9sDzuTW7SCih6QCifxrxDAeySfRsg-xs&solsessionid=208b1f354f4cc47d1007b9569b9f3950",

        // EBS
        'ebs1': "https://ebsonair.ebs.co.kr/groundwavefamilypc/familypc1m/chunklist.m3u8",
        'ebs2': "https://ebsonair.ebs.co.kr/ebs2familypc/familypc1m/chunklist.m3u8",
        'ebs-kids': "https://ebsonair.ebs.co.kr/ebsufamilypc/familypc1m/chunklist.m3u8",
        'plus1': "https://ebsonair.ebs.co.kr/plus1familypc/familypc1m/chunklist.m3u8",
        'plus2': "https://ebsonair.ebs.co.kr/plus2familypc/familypc1m/chunklist.m3u8",
        'ebse': "https://ebsonair.ebs.co.kr/plus3familypc/familypc1m/chunklist.m3u8",
        'ebs-fm': "https://ebsonair.ebs.co.kr/fmradiofamilypc/familypc1m/chunklist.m3u8",
        'bandi-fl': "https://ebsonair.ebs.co.kr/cloud/iradio/chunklist.m3u8",
    }), []);

    const value = useMemo(() => ({
        channels,
        subChannels,
        streams,
        selectedChannelType,
        setSelectedChannelType
    }), [channels, subChannels, streams, selectedChannelType]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within AppProvider');
    }
    return context;
};