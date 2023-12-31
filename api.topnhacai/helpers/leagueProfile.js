exports.LeagueProfiles = () => {
    var data = [
        {
            "leagueId": "111",
            "name": "Ireland Premier Division",
            "shortName": "IRE PR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "122",
            "name": "Argentine Division 1",
            "shortName": "ARG D1",
            "type": 1,
            "subLeagueName": "2nd Stage"
        },
        {
            "leagueId": "133",
            "name": "Austrian Bundesliga",
            "shortName": "AUT D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "144",
            "name": "Brazil Serie A",
            "shortName": "BRA D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "155",
            "name": "Belgian Pro League",
            "shortName": "BEL D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "166",
            "name": "Poland Ekstraklasa",
            "shortName": "POL PR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "177",
            "name": "Denmark Superligaen",
            "shortName": "DEN SASL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "188",
            "name": "German Bundesliga",
            "shortName": "GER D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "199",
            "name": "German Bundesliga 2",
            "shortName": "GER D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1011",
            "name": "Russia Premier League",
            "shortName": "RUS PR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1112",
            "name": "France Ligue 1",
            "shortName": "FRA D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "1213",
            "name": "France Ligue 2",
            "shortName": "FRA D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1314",
            "name": "Finland Veikkausliga",
            "shortName": "FIN D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1516",
            "name": "K League 1",
            "shortName": "KOR D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1617",
            "name": "Holland Eredivisie",
            "shortName": "HOL D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1718",
            "name": "Holland Eerste Divisie",
            "shortName": "HOL D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1123",
            "name": "USA Major League Soccer",
            "shortName": "MLS",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1224",
            "name": "Norwegian Tippeligaen",
            "shortName": "NOR D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "1325",
            "name": "Portugal Primeira Liga",
            "shortName": "POR D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1527",
            "name": "J1 League",
            "shortName": "JPN D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1628",
            "name": "Swedish Allsvenskan",
            "shortName": "SWE D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1729",
            "name": "Swiss Super League",
            "shortName": "SUI Sl",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1921",
            "name": "Scottish Premier League",
            "shortName": "SCO PR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1033",
            "name": "Turkey Super Lig",
            "shortName": "TUR D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1134",
            "name": "Spanish La Liga",
            "shortName": "SPA D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "1235",
            "name": "Greece Super League A",
            "shortName": "GRE D1",
            "type": 1,
            "subLeagueName": "Relegation"
        },
        {
            "leagueId": "1336",
            "name": "Spanish Segunda Division",
            "shortName": "SPA D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1437",
            "name": "Italian Serie A",
            "shortName": "ITA D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "1538",
            "name": "England League 2",
            "shortName": "ENG L2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1639",
            "name": "English Premier League",
            "shortName": "ENG PR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "1730",
            "name": "England Championship",
            "shortName": "ENG LCH",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1932",
            "name": "England League 1",
            "shortName": "ENG L1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1044",
            "name": "Italian Serie B",
            "shortName": "ITA D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "1145",
            "name": "International Club Friendly",
            "shortName": "INT CF",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1347",
            "name": "Olympic Games",
            "shortName": "Olympic",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1448",
            "name": "Men Olympic Football Tournament",
            "shortName": "MOFT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1842",
            "name": "English FA Charity Shield",
            "shortName": "FA Charit",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1055",
            "name": "Denmark Cup",
            "shortName": "DAN Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1156",
            "name": "Germany Cup",
            "shortName": "GERC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1257",
            "name": "German Bundesliga Cup",
            "shortName": "GBC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1358",
            "name": "EAFF East Asian Cup",
            "shortName": "EASTC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1459",
            "name": "French Cup",
            "shortName": "FRAC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1550",
            "name": "French League Cup",
            "shortName": "FRA LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1853",
            "name": "Johan Cruijff Schaal",
            "shortName": "DSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1954",
            "name": "KNVB Cup",
            "shortName": "HOLC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1066",
            "name": "Chinese Super League",
            "shortName": "CHA CSL",
            "type": 1,
            "subLeagueName": "Group A"
        },
        {
            "leagueId": "1167",
            "name": "Chinese Football Association Jia League",
            "shortName": "CHA D1",
            "type": 1,
            "subLeagueName": "2nd Stage (A)"
        },
        {
            "leagueId": "1268",
            "name": "Croatia Cup",
            "shortName": "CRO Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1460",
            "name": "Norway NM Cupen",
            "shortName": "NORC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1763",
            "name": "UEFA European Championship",
            "shortName": "EURO  Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1965",
            "name": "Portugal Super Cup",
            "shortName": "POR SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1077",
            "name": "Portugal Campeonato Nacional",
            "shortName": "POR CN",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1178",
            "name": "Japanese Super Cup",
            "shortName": "JPN SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1279",
            "name": "J-League Cup",
            "shortName": "JPN LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1370",
            "name": "Sweden Cupen",
            "shortName": "SWE Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1471",
            "name": "Switzerland Cup",
            "shortName": "SUI Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1572",
            "name": "FIFA World Cup",
            "shortName": "World Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1673",
            "name": "FIFA U-20 World Cup",
            "shortName": "FIFAWYC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1774",
            "name": "Scotland League Cup",
            "shortName": "SCO LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1875",
            "name": "Scotland FA Cup",
            "shortName": "SCOFAC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1976",
            "name": "Intertoto Cup",
            "shortName": "TOTO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1088",
            "name": "Qualifier",
            "shortName": "Qualifier",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1189",
            "name": "Spanish Copa Del Rey",
            "shortName": "SPA CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1381",
            "name": "Coppa Italia",
            "shortName": "ITA Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1482",
            "name": "England League Cup",
            "shortName": "ENG LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1684",
            "name": "China Super Cup",
            "shortName": "China Lea",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1785",
            "name": "Chinese FA Cup",
            "shortName": "CFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1886",
            "name": "FIFA Confederations Cup",
            "shortName": "FICC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1987",
            "name": "Copa Libertadores",
            "shortName": "CON CLA",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1099",
            "name": "England FA Cup",
            "shortName": "ENG FAC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1190",
            "name": "World placings",
            "shortName": "World plac",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1392",
            "name": "Africa Cup of Nations",
            "shortName": "CAF NC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1594",
            "name": "AFC Asian Cup",
            "shortName": "AFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "1695",
            "name": "Austrian Cup",
            "shortName": "AUT CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13014",
            "name": "UEFA Champions League",
            "shortName": "UEFA CL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18019",
            "name": "Belgian Cup",
            "shortName": "BEL Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19010",
            "name": "UEFA Super Cup",
            "shortName": "UEFA SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10112",
            "name": "Belgium Super Cup",
            "shortName": "BEL SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13115",
            "name": "UEFA Europa League",
            "shortName": "UEFA EL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14116",
            "name": "UEFA - EURO U21 Qualifying",
            "shortName": "UEFA  U21Q",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15117",
            "name": "Poland Cup",
            "shortName": "POL Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16118",
            "name": "Czech Republic Cup",
            "shortName": "CZEC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18110",
            "name": "Israel Premier League",
            "shortName": "ISR D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "19111",
            "name": "Ukrainian Premier League",
            "shortName": "UKR D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10213",
            "name": "Slovenia 2.Liga",
            "shortName": "SLO D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11214",
            "name": "Swiss Challenge League",
            "shortName": "SUI D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "12215",
            "name": "Sweden Superettan",
            "shortName": "SWE D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "13216",
            "name": "Norway Adeccoligaen",
            "shortName": "NOR AL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "14217",
            "name": "Romania Liga I",
            "shortName": "ROM D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "17210",
            "name": "Danish 1st Division",
            "shortName": "DEN D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "18211",
            "name": "Austria Erste Division",
            "shortName": "AUT D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "19212",
            "name": "Serbian Superliga",
            "shortName": "SER D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10314",
            "name": "Turkey 1. Lig",
            "shortName": "TFF 1. Lig",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11315",
            "name": "Bulgaria Premier League",
            "shortName": "BUL D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "12316",
            "name": "Slovak Super Liga",
            "shortName": "SVK D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "13317",
            "name": "Croatia 1.Division",
            "shortName": "CRO D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "15319",
            "name": "Welsh Premier League",
            "shortName": "Welsh PR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "16310",
            "name": "Hungary Borsodi Liga",
            "shortName": "HUN D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "17311",
            "name": "Czech Republic Gambrinus Liga",
            "shortName": "CZE D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "18312",
            "name": "Belgian Second Division",
            "shortName": "BEL D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "19313",
            "name": "Ireland First Division",
            "shortName": "IRE D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10415",
            "name": "Primera Division Liga MX",
            "shortName": "MEX D1",
            "type": 1,
            "subLeagueName": "Apertura"
        },
        {
            "leagueId": "12417",
            "name": "Italy C1",
            "shortName": "ITA C1",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "13418",
            "name": "Slovakia Cup",
            "shortName": "SVK Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14419",
            "name": "England Johnstone",
            "shortName": "ENG JPT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15410",
            "name": "Scotland Bells Challenge Cup",
            "shortName": "SCO BC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16411",
            "name": "England Conference",
            "shortName": "ENG Conf",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "17412",
            "name": "Royal League",
            "shortName": "ROYAL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10516",
            "name": "Scottish Championship",
            "shortName": "SCO CH",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11517",
            "name": "Scottish Division One",
            "shortName": "SCO L1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "12518",
            "name": "Scottish Division Two",
            "shortName": "SCO L2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "13519",
            "name": "Russia Cup",
            "shortName": "RUS Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14510",
            "name": "Ukraine Cup",
            "shortName": "UKRC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15511",
            "name": "Hungary - Cup",
            "shortName": "HUN Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17513",
            "name": "Portugal Segunda Liga",
            "shortName": "POR D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "19515",
            "name": "Cyprus 1 Division",
            "shortName": "CYP D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10617",
            "name": "Israel Leumit League",
            "shortName": "ISR D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11618",
            "name": "Gulf Cup of Nations",
            "shortName": "GC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12619",
            "name": "Japan Emperor's Cup",
            "shortName": "JE Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13610",
            "name": "Greece Cup",
            "shortName": "GRE Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15612",
            "name": "Northern Ireland Premier League",
            "shortName": "NIR D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "16613",
            "name": "Iceland Premier Division",
            "shortName": "ICE PR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "17614",
            "name": "Turkey Cup",
            "shortName": "TUR Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18615",
            "name": "Cyprus Cup",
            "shortName": "CYP Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10718",
            "name": "Greece National B",
            "shortName": "GRE D2",
            "type": 1,
            "subLeagueName": "Promotion Playoffs"
        },
        {
            "leagueId": "12710",
            "name": "Efes plsen cup 4",
            "shortName": "Efes plsen",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13711",
            "name": "Mexico Torneo Interliga",
            "shortName": "MEX IL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15713",
            "name": "CONCACAF Championship U20",
            "shortName": "CNCF U20Q",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16714",
            "name": "African Youth Championship",
            "shortName": "CAFYC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17715",
            "name": "England FA Vase",
            "shortName": "ENG FAT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18716",
            "name": "Brazil Campeonato Paulista",
            "shortName": "BRA SP",
            "type": 1,
            "subLeagueName": "T.I Final"
        },
        {
            "leagueId": "11810",
            "name": "Brazil Campeonato Carioca",
            "shortName": "BRA RJ",
            "type": 1,
            "subLeagueName": "T.R.Final"
        },
        {
            "leagueId": "12811",
            "name": "UAFA Club Cup",
            "shortName": "ARCL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13812",
            "name": "Others",
            "shortName": "Others",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14813",
            "name": "Four Nations Tournament-Woman",
            "shortName": "W4NT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15814",
            "name": "Women Olympic Football Tournament",
            "shortName": "WOFT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16815",
            "name": "Copa do Brasil",
            "shortName": "Copa do Brasil",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17816",
            "name": "A3 Champions Cup",
            "shortName": "A3CC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18817",
            "name": "Concacaf Copa Caribe",
            "shortName": "CGC CZ",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19818",
            "name": "Finland League Cup",
            "shortName": "FIN LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10910",
            "name": "Wales Cup",
            "shortName": "WALC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11911",
            "name": "Russian Super Cup",
            "shortName": "RUS SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12912",
            "name": "AFC Champions League",
            "shortName": "AFC CL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13913",
            "name": "Algerian Ligue Professionnelle 1",
            "shortName": "ALG D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "14914",
            "name": "Singapore League",
            "shortName": "SIN D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "15915",
            "name": "Ireland FAI Cup",
            "shortName": "IRFAIC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16916",
            "name": "Buigarian Cup",
            "shortName": "BUL Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17917",
            "name": "Romania Cup",
            "shortName": "ROMC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19919",
            "name": "Syrian Cup",
            "shortName": "SYR Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10022",
            "name": "Ireland Setanta Cup",
            "shortName": "IRE SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11023",
            "name": "England RES South",
            "shortName": "EngResS",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "12024",
            "name": "China National Games – Men’s Football",
            "shortName": "CHN NGFM",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13025",
            "name": "France Ligue 3",
            "shortName": "FRA D3",
            "type": 1,
            "subLeagueName": "Playoffs"
        },
        {
            "leagueId": "15027",
            "name": "Israel Cup",
            "shortName": "ISR CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17029",
            "name": "England Youth FA Cup",
            "shortName": "ENG YFAC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18020",
            "name": "Slovenia Cup",
            "shortName": "SLOC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10123",
            "name": "UEFA European U-17 Football Championship",
            "shortName": "UEFA U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11124",
            "name": "Serbia Cup",
            "shortName": "SER CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12125",
            "name": "Finland Ykkonen",
            "shortName": "FIN D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "13126",
            "name": "Conmebol - Sudamericano U20",
            "shortName": "CSU20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14127",
            "name": "Latvian Higher League",
            "shortName": "LAT D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "15128",
            "name": "UEFA European U-19 Football Championship",
            "shortName": "UEFA U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17120",
            "name": "Lithuania - 1.Division",
            "shortName": "LIT D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "18121",
            "name": "Sweden Division 1",
            "shortName": "SWE D1 SN",
            "type": 1,
            "subLeagueName": "North"
        },
        {
            "leagueId": "19122",
            "name": "Coppa Italia Lega PRO",
            "shortName": "ITA PRO LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10224",
            "name": "Kirin Cup",
            "shortName": "KIR Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11225",
            "name": "Poland Liga 1",
            "shortName": "POL D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "12226",
            "name": "Toulon Tournament",
            "shortName": "TOUT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13227",
            "name": "UEFA European Women's Championship",
            "shortName": "UEFACW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14228",
            "name": "Copa America",
            "shortName": "AMEC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16220",
            "name": "Finland Suomen Cup",
            "shortName": "FIN CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10325",
            "name": "Belarusian Premier League",
            "shortName": "BLR D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11326",
            "name": "Ireland League Cup",
            "shortName": "IRE LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12327",
            "name": "Concacaf Gold",
            "shortName": "CGC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15320",
            "name": "Russian National Football League",
            "shortName": "RUS D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "17322",
            "name": "Fin-kkon S",
            "shortName": "Fin-kkon S",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "18323",
            "name": "Fin-kkon W",
            "shortName": "Fin-kkon W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "19324",
            "name": "CAF Champions League",
            "shortName": "CAF CL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10426",
            "name": "Uruguay Primera Division",
            "shortName": "URU D1",
            "type": 1,
            "subLeagueName": "Torneo Intermedio Group B"
        },
        {
            "leagueId": "11427",
            "name": "FINKE",
            "shortName": "FINKE",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "12428",
            "name": "Peru Primera Division",
            "shortName": "PER D1",
            "type": 1,
            "subLeagueName": "Autumn"
        },
        {
            "leagueId": "13429",
            "name": "Latvia Cup",
            "shortName": "LAT Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14420",
            "name": "Fin-kkon N",
            "shortName": "Fin-kkon N",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "15421",
            "name": "Singapore Cup",
            "shortName": "SIN CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16422",
            "name": "Iceland Cup",
            "shortName": "ICE CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17423",
            "name": "Slovenia 1.Liga",
            "shortName": "SLO D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "18424",
            "name": "CRSK",
            "shortName": "CRSK",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19425",
            "name": "Hungary Super Cup",
            "shortName": "HUN SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10527",
            "name": "Primera Division de Colombiano-Apertura",
            "shortName": "COL D1",
            "type": 1,
            "subLeagueName": "Autumn"
        },
        {
            "leagueId": "11528",
            "name": "AFC Challenge Cup",
            "shortName": "AFC CC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12529",
            "name": "Italy TIM Cup",
            "shortName": "TIM Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16523",
            "name": "European Women",
            "shortName": "UEFA-W U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11629",
            "name": "FIFA U-17 World Cup",
            "shortName": "WCU17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12620",
            "name": "CAF Confederation Cup",
            "shortName": "CAF Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13621",
            "name": "Copa Sudamericana",
            "shortName": "CON CSA",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14622",
            "name": "Super Coppa Italiana",
            "shortName": "ITA SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10729",
            "name": "Recopa Sudamericana",
            "shortName": "RESU",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11720",
            "name": "Denmark Division 3",
            "shortName": "DEN D3",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "12721",
            "name": "Denmark Division 3B",
            "shortName": "DEN D3B",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "13722",
            "name": "Australia A-League",
            "shortName": "AUS D1",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "14723",
            "name": "England RES North",
            "shortName": "EngResN",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "15724",
            "name": "ItalianC",
            "shortName": "ItalianC",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "16725",
            "name": "ItalianD",
            "shortName": "ItalianD",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "17726",
            "name": "ItalianE",
            "shortName": "ItalianE",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "19728",
            "name": "Persian Gulf Pro League",
            "shortName": "IRN PR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10820",
            "name": "FA Cup Malaysia",
            "shortName": "MAS FAC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14824",
            "name": "J2 League",
            "shortName": "JPN D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "15825",
            "name": "English FA Women's Premier League",
            "shortName": "ENG WPR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10921",
            "name": "Czech Republic 2.Liga",
            "shortName": "CZE D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "11922",
            "name": "East Asian Games football",
            "shortName": "EAG",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12923",
            "name": "Saudi Professional League",
            "shortName": "KSA PR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "13924",
            "name": "Southeast Asian Games",
            "shortName": "SEAG",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15926",
            "name": "AFC U-16 Championship",
            "shortName": "AFAYC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16927",
            "name": "West Asian Games-Football",
            "shortName": "WAG",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17928",
            "name": "England Conference North Division",
            "shortName": "ENG CN",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "18929",
            "name": "England Conference South Division",
            "shortName": "ENG CS",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10033",
            "name": "Francophone Games-Football",
            "shortName": "FRGFB",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11034",
            "name": "UAE Pro-League",
            "shortName": "UAE LP",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "13036",
            "name": "Egyptian Premier League",
            "shortName": "EGY D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "14037",
            "name": "FIFA Club World Cup",
            "shortName": "FCWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17030",
            "name": "South Asian Football Federation",
            "shortName": "SAFF",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18031",
            "name": "South Africa Premier Soccer League",
            "shortName": "SAPL D1",
            "type": 1,
            "subLeagueName": "Playoffs"
        },
        {
            "leagueId": "19032",
            "name": "Jordan Premier League",
            "shortName": "JOR D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11135",
            "name": "Hong Kong Premier League",
            "shortName": "HK PR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "13137",
            "name": "Qatar League",
            "shortName": "QAT D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "14138",
            "name": "Syrian League",
            "shortName": "Syri D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "15139",
            "name": "Albania Super league",
            "shortName": "ALB D1",
            "type": 1,
            "subLeagueName": "Playoffs"
        },
        {
            "leagueId": "16130",
            "name": "Liga Super Malaysia",
            "shortName": "MAS SL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "17131",
            "name": "Malaysia Premier League",
            "shortName": "MAS PL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "18132",
            "name": "Bahraini Premier League",
            "shortName": "BHR D1",
            "type": 1,
            "subLeagueName": "Relegation Quarterfinals"
        },
        {
            "leagueId": "19133",
            "name": "JapC",
            "shortName": "JapC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11236",
            "name": "Botola Pro 1",
            "shortName": "MAR D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "12237",
            "name": "Kuwaiti Premier League",
            "shortName": "KUW D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "13238",
            "name": "Palestine Football League",
            "shortName": "PALL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "14239",
            "name": "Libyan Premier League",
            "shortName": "LIBD1L",
            "type": 1,
            "subLeagueName": "Championship Group"
        },
        {
            "leagueId": "15230",
            "name": "Lebanese Premier League",
            "shortName": "LBN D1",
            "type": 1,
            "subLeagueName": "Championship"
        },
        {
            "leagueId": "16231",
            "name": "Professional Tunisian League 1",
            "shortName": "TUN D1",
            "type": 1,
            "subLeagueName": "Championship"
        },
        {
            "leagueId": "19234",
            "name": "LG Cup",
            "shortName": "LG Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10336",
            "name": "Jordan Cup",
            "shortName": "JORC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11337",
            "name": "UAE Cup",
            "shortName": "UAE C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12338",
            "name": "Oman Professional League",
            "shortName": "OMA PL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "13339",
            "name": "Algeria CUP",
            "shortName": "ALG CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14330",
            "name": "England South 1 East League",
            "shortName": "ENG S1E",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "15331",
            "name": "England South 1 West League",
            "shortName": "ENG S1W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "16332",
            "name": "England Southern Premier League",
            "shortName": "ENG-S PR",
            "type": 1,
            "subLeagueName": "Playoff Final"
        },
        {
            "leagueId": "17333",
            "name": "Scottish Highland Football League",
            "shortName": "SCO HL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "19335",
            "name": "Saudi Crown Prince Cup",
            "shortName": "SCP CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10437",
            "name": "Argentina - Torneo Pentagonal de Verano",
            "shortName": "ARG TPV",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11438",
            "name": "New Zealand Football Championship",
            "shortName": "NZFC",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "12439",
            "name": "England Ryman(Isthmian) League",
            "shortName": "ENG RL1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "14431",
            "name": "CONCACAF Champions League",
            "shortName": "CNCF CHL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16433",
            "name": "Torneo Di Viareggio",
            "shortName": "VIAT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18435",
            "name": "Albania Division 2",
            "shortName": "ALB D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "19436",
            "name": "FANS CUP",
            "shortName": "FANSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10538",
            "name": "AFC Cup",
            "shortName": "AFC Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11539",
            "name": "Slovakia 2. Liga",
            "shortName": "SVK D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "12530",
            "name": "Bosnia and Herzegovina Premier League",
            "shortName": "BOS PL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "13531",
            "name": "Estonia Champions League",
            "shortName": "EST D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "14532",
            "name": "Primera Division de Paraguay",
            "shortName": "PAR D1",
            "type": 1,
            "subLeagueName": "Autumn"
        },
        {
            "leagueId": "15533",
            "name": "Bosnia and Herzegovina Cup",
            "shortName": "BOS Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18536",
            "name": "Brazil Serie B",
            "shortName": "BRA D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "15634",
            "name": "Northern Ireland League Cup",
            "shortName": "NIR LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14734",
            "name": "Korea Cup",
            "shortName": "Korea Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17737",
            "name": "Swiss Challenge League (Playoff)",
            "shortName": "SWPO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18738",
            "name": "Denmark Viasat Cup",
            "shortName": "DMVC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19739",
            "name": "Turkey Play Off",
            "shortName": "TUR PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11832",
            "name": "Iceland Division 1",
            "shortName": "ICE D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "12833",
            "name": "Amsterdam Tournament",
            "shortName": "AMST",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13834",
            "name": "McInerney Ford Night Series Division 1",
            "shortName": "AUS FWD1",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15836",
            "name": "England Association Community Shield",
            "shortName": "ENG FACS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17838",
            "name": "FIFA U-20 Women's World Cup",
            "shortName": "FIFA WU20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18839",
            "name": "FIFA Women",
            "shortName": "WWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29830",
            "name": "Moldova Divizia Nationala",
            "shortName": "MOL D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11933",
            "name": "Primera Division de Venezuela",
            "shortName": "VEN D1",
            "type": 1,
            "subLeagueName": "Apertura"
        },
        {
            "leagueId": "12934",
            "name": "Macedonian First Football League",
            "shortName": "MKD D1",
            "type": 1,
            "subLeagueName": "Relegation Playoffs"
        },
        {
            "leagueId": "13935",
            "name": "Japan Satellite League",
            "shortName": "JPN SL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15937",
            "name": "Sweden 3.div Mellersta Norrland",
            "shortName": "SWE D3N",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16938",
            "name": "Women’s Peace Cup",
            "shortName": "WPEA Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17939",
            "name": "England Academies Under 18",
            "shortName": "ENG U18",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29931",
            "name": "AFC U-19 Championship",
            "shortName": "AFC U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11045",
            "name": "Asian Games football",
            "shortName": "AGS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12046",
            "name": "Poland League Cup",
            "shortName": "POL LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13047",
            "name": "Victory Shield",
            "shortName": "Victory．S",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15049",
            "name": "Asian Games football Women",
            "shortName": "AGSW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13148",
            "name": "Hong Kong Guangdong Cup",
            "shortName": "GDHKCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14149",
            "name": "AKDENIZ",
            "shortName": "AKDC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15140",
            "name": "Chile Primera Division",
            "shortName": "CHI D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "18143",
            "name": "Tipsport Cup",
            "shortName": "TIP CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10246",
            "name": "Hong Kong League Cup",
            "shortName": "HK LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13249",
            "name": "Argentine Division 2",
            "shortName": "ARG D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "14240",
            "name": "UNCAF Nations Cup",
            "shortName": "UNCAFNC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16242",
            "name": "Malaysia Cup",
            "shortName": "MALAC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17243",
            "name": "ABSA cup",
            "shortName": "ABSA cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18244",
            "name": "Four Nations Tournament",
            "shortName": "INT FRLW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19245",
            "name": "CONCACAF U17 Championship",
            "shortName": "CNCF U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11348",
            "name": "Slovakia 3.Liga",
            "shortName": "Slo D3",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12349",
            "name": "ASEAN Hassanal Bolkiah U21 You",
            "shortName": "ASEANYC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13340",
            "name": "Wales - FAW Premier Cup",
            "shortName": "WAL WPC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14341",
            "name": "Algarve Cup",
            "shortName": "ALGC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15342",
            "name": "AFC U-16 Women’s Championship",
            "shortName": "AFC WU16",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16343",
            "name": "VIC Premier League",
            "shortName": "AUS VPL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "17344",
            "name": "Korea League Cup",
            "shortName": "K-LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10448",
            "name": "French Feminines D1",
            "shortName": "FRA WD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "11449",
            "name": "German Frauen Bundesliga",
            "shortName": "GER WD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "13441",
            "name": "Sweden Damallsvenskan",
            "shortName": "SWE WD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "14442",
            "name": "FIN WC",
            "shortName": "FIN WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17445",
            "name": "Sweden Folksam U21 Allsvenskan Sodra",
            "shortName": "SWE U21AS",
            "type": 1,
            "subLeagueName": "North"
        },
        {
            "leagueId": "18446",
            "name": "USL Championship",
            "shortName": "USL CH",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10549",
            "name": "Qatar League CUP",
            "shortName": "QATL CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11540",
            "name": "Egyptian Scores Cup",
            "shortName": "EGYCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12541",
            "name": "England FA Women's Cup",
            "shortName": "ENG FA WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13542",
            "name": "VIC Women’s Premier League",
            "shortName": "AUS WPL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "15544",
            "name": "Japan Women's Football League 2",
            "shortName": "JWD2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "16545",
            "name": "Korea National League",
            "shortName": "KOR D3",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "17546",
            "name": "Gambardella Cup",
            "shortName": "Gam C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18547",
            "name": "Hong Kong FA Cup",
            "shortName": "HKFA CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19548",
            "name": "Japan Women's Football League 1",
            "shortName": "JPN WD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10640",
            "name": "Canadian Premier Soccer League",
            "shortName": "CAN CSL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11641",
            "name": "Denmark Woman League Divison 2",
            "shortName": "DEN WD",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "12642",
            "name": "Germany Woman's Cup",
            "shortName": "GERWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13643",
            "name": "Made C",
            "shortName": "Made",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14644",
            "name": "Sweden Woman",
            "shortName": "SWEC-W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15645",
            "name": "Yemeni League",
            "shortName": "YEM D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "16646",
            "name": "Kazakhstan Premier League",
            "shortName": "KAZ PR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "17647",
            "name": "Morocco cup",
            "shortName": "MOLE Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18648",
            "name": "Korean FA Cup",
            "shortName": "KFAC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19649",
            "name": "Armenia Premier League",
            "shortName": "ARM D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10741",
            "name": "West Asian Football Federation Championship",
            "shortName": "WAFFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11742",
            "name": "Kuwait Emir Cup",
            "shortName": "KUW Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13744",
            "name": "Women Norwegian Toppserien",
            "shortName": "NORW",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "14745",
            "name": "Lebanese FA Cup",
            "shortName": "LIB",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15746",
            "name": "Finland Women Premier League",
            "shortName": "FIN WD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "16747",
            "name": "Russia Youth Championship League",
            "shortName": "RUS YthC",
            "type": 1,
            "subLeagueName": "Group A"
        },
        {
            "leagueId": "17748",
            "name": "Peace Cup",
            "shortName": "PEACE Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18749",
            "name": "Swden Women Division 2",
            "shortName": "SWE WD2",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29740",
            "name": "Nor Cham W U17",
            "shortName": "NCW U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10842",
            "name": "Black Sea Tournament U16",
            "shortName": "BLA STU",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11843",
            "name": "National Premier Leagues Western Australia",
            "shortName": "WAUS D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "12844",
            "name": "K-National L",
            "shortName": "K-National",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13845",
            "name": "USA Open Cup",
            "shortName": "USA CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14846",
            "name": "Urgup C",
            "shortName": "Urgup C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15847",
            "name": "Ukraine Super Cup",
            "shortName": "UKR SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17849",
            "name": "Pan-American Games - Women",
            "shortName": "PAGW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "28840",
            "name": "Chatham C",
            "shortName": "Chatham C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29841",
            "name": "Pan-American Games - Men",
            "shortName": "PAGM",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10943",
            "name": "European Youth League",
            "shortName": "EURO YL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11944",
            "name": "Poland Super Cup",
            "shortName": "Pol SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12945",
            "name": "North American SuperLiga",
            "shortName": "NASL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13946",
            "name": "GP U16",
            "shortName": "GP U16",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14947",
            "name": "Romania Super Cup",
            "shortName": "Rom SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15948",
            "name": "Turkey Bilyoner Cup",
            "shortName": "Tur BC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16949",
            "name": "Bulgaria Super Cup",
            "shortName": "Bulg SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "27940",
            "name": "Turkey Cappadocia Cup",
            "shortName": "TUR CAPC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "28941",
            "name": "Emirates Stadium Cup",
            "shortName": "Emirates S",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29942",
            "name": "Weifang Cup",
            "shortName": "WFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10055",
            "name": "Poland Mloda Ekstraklasa",
            "shortName": "POL ME",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11056",
            "name": "North Irish Milk Cup",
            "shortName": "Milk Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13058",
            "name": "AFF U-20 Youth Championship",
            "shortName": "AFF U20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14059",
            "name": "Costa Rica Primera Division",
            "shortName": "CRC D1",
            "type": 1,
            "subLeagueName": "Apertura"
        },
        {
            "leagueId": "15050",
            "name": "Portugal League Cup",
            "shortName": "PORLC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18053",
            "name": "Women Norway Cupen",
            "shortName": "NOR WCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10156",
            "name": "Champions Youth Cup",
            "shortName": "YCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11157",
            "name": "Primera Division de El Salvador",
            "shortName": "SLV D1",
            "type": 1,
            "subLeagueName": "Apertura"
        },
        {
            "leagueId": "13159",
            "name": "Hungary League Cup",
            "shortName": "HUN LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14150",
            "name": "Luxembourg National Division",
            "shortName": "LUX D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "15151",
            "name": "Pestabola Merdeka",
            "shortName": "MC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16152",
            "name": "AFF U-17 Youth Championship",
            "shortName": "AFF U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17153",
            "name": "Japan Youth Sahara Cup",
            "shortName": "J.S Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18154",
            "name": "Wales Challenge League Cup",
            "shortName": "WAL CLC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10257",
            "name": "GCC Champions League",
            "shortName": "GCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11258",
            "name": "Scottish Reserves League",
            "shortName": "SCO SRL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12259",
            "name": "Denmark U21",
            "shortName": "DEN U21",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "13250",
            "name": "S.F.L. Under 20 Youth Division",
            "shortName": "SCO U20",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "14251",
            "name": "Can O.C",
            "shortName": "Can O.C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15252",
            "name": "Japan Women League Cup",
            "shortName": "WJLC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16253",
            "name": "UEFA European Women",
            "shortName": "EU-WU17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17254",
            "name": "Kazakhstan Cup",
            "shortName": "KAZ C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18255",
            "name": "Anka cup",
            "shortName": "Anka cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19256",
            "name": "German Junioren Bundesliga Cup",
            "shortName": "GERJBC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13351",
            "name": "Malta Premier League",
            "shortName": "MAL D1",
            "type": 1,
            "subLeagueName": "Championship"
        },
        {
            "leagueId": "14352",
            "name": "UEFA Women",
            "shortName": "UEFA WUC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10459",
            "name": "Denmark Womans Cup",
            "shortName": "DWLWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12451",
            "name": "AFA Youth Championship U20",
            "shortName": "AFA.C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13452",
            "name": "OFC Champions League",
            "shortName": "Oce CL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15454",
            "name": "Greece Super Cup",
            "shortName": "GRE S CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17456",
            "name": "Beach Soccer World Cup",
            "shortName": "BSWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19458",
            "name": "Moldova CUP",
            "shortName": "MOL Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18558",
            "name": "Lithuania cup",
            "shortName": "LIT Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19559",
            "name": "Kuwaiti Crown Prince Cup",
            "shortName": "KUWCPC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10651",
            "name": "Pan Arab Games - Football",
            "shortName": "Pan Arab",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11652",
            "name": "UEFA Futsal Championship",
            "shortName": "UFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12653",
            "name": "Montenegro Prva Crnogorska Liga",
            "shortName": "MNE D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "13654",
            "name": "Georgia Primera Division",
            "shortName": "GEO D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "14655",
            "name": "EAFF Women’s Football Championship",
            "shortName": "EFFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15656",
            "name": "Aus C",
            "shortName": "Aus C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16657",
            "name": "England Ryman(Isthmian) League Premier Division",
            "shortName": "ENG RYM",
            "type": 1,
            "subLeagueName": "Playoff Final"
        },
        {
            "leagueId": "17658",
            "name": "El SPD Play off",
            "shortName": "El SPD off",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18659",
            "name": "Portugal Liga Intercalar",
            "shortName": "POR RES",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29650",
            "name": "FYR Macedonia Cup",
            "shortName": "MKD CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11753",
            "name": "Southeast Asian Games Women",
            "shortName": "SEAGW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12754",
            "name": "Japanese J-League Division off",
            "shortName": "JJLD off",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13755",
            "name": "Holland Eredivisie Women's",
            "shortName": "HOL WD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "14756",
            "name": "Japan Women Empresss Cup",
            "shortName": "JW Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15757",
            "name": "Belgium Women 1st National",
            "shortName": "BEL WD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "16758",
            "name": "Faroe Islands Formuladeildin",
            "shortName": "FAR D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "17759",
            "name": "Primera Division de Honduras",
            "shortName": "HON D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "29751",
            "name": "Liga Nacional de Guatemala",
            "shortName": "GUA D1",
            "type": 1,
            "subLeagueName": "Apertura"
        },
        {
            "leagueId": "11854",
            "name": "CECAFA Tusker Challenge Cup",
            "shortName": "CECAFA Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13856",
            "name": "BaLaJia off",
            "shortName": "BaLaJia",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14857",
            "name": "Japan W.off",
            "shortName": "Jap.W.off",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15858",
            "name": "FA ED OFF(Women)",
            "shortName": "ENG WPR LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16859",
            "name": "England Setanta Shield (Conference League Cup)",
            "shortName": "ENG CLC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "27850",
            "name": "Futsal Spain Division De Honor",
            "shortName": "SPA FDH",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "28851",
            "name": "Dubai Football Challenge",
            "shortName": "D.F.C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12956",
            "name": "Kuwaiti Federation Cup",
            "shortName": "Kuw FC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13957",
            "name": "Bolivia Primera Division",
            "shortName": "BOL D1",
            "type": 1,
            "subLeagueName": "Autumn"
        },
        {
            "leagueId": "26950",
            "name": "Primera Division de Ecuador",
            "shortName": "ECU D1",
            "type": 1,
            "subLeagueName": "Autumn"
        },
        {
            "leagueId": "28952",
            "name": "International Friendship Youth",
            "shortName": "INT Y-TOUR",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10066",
            "name": "Gulf Olympic Teams Cup",
            "shortName": "GOT Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13069",
            "name": "Singapore League Cup",
            "shortName": "STLC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14060",
            "name": "Holland Beloften Eredivisie",
            "shortName": "HOL BD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "15061",
            "name": "Commonwealth of Independent States",
            "shortName": "CIS Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16062",
            "name": "Australia Women's Premier Leag",
            "shortName": "AWPL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17063",
            "name": "FOXTEL Cup",
            "shortName": "FOXC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18064",
            "name": "Channel One Cup",
            "shortName": "CO Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19065",
            "name": "FIFA Futsal World Cup",
            "shortName": "Fut W5",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10167",
            "name": "Lunar New Year Cup",
            "shortName": "LNY CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11168",
            "name": "Chile Primera B",
            "shortName": "CHI D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "12169",
            "name": "McInerney Ford Night Series Pr",
            "shortName": "MFNSPD",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13160",
            "name": "Azerbaijan Premier League",
            "shortName": "AZE D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "16163",
            "name": "NSW Premier League",
            "shortName": "AUS NSW",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "17164",
            "name": "Balti liiga",
            "shortName": "INT BL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18165",
            "name": "Iran Cup",
            "shortName": "Iran Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19166",
            "name": "Australia Victorian Premier League U21",
            "shortName": "Aus VPL U21",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10268",
            "name": "Azerbaijan Cup",
            "shortName": "AZE CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11269",
            "name": "Conmebol-Sudamericano WomenU20",
            "shortName": "CON WU20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13261",
            "name": "Lion City Cup",
            "shortName": "LCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14262",
            "name": "African Futsal Championship",
            "shortName": "Fut AC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15263",
            "name": "Sweden Super Cup",
            "shortName": "SWESC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18266",
            "name": "Norwegian Junior U19",
            "shortName": "NOR U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "19267",
            "name": "AFC Women’s Asian Cup",
            "shortName": "AFC W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10369",
            "name": "Korea Challengers League",
            "shortName": "KCL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11360",
            "name": "Chairman’s Cup",
            "shortName": "HK CC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12361",
            "name": "Qatar Crown Prince Cup",
            "shortName": "QCPC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13362",
            "name": "Chinese U19 League",
            "shortName": "CHA U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "14363",
            "name": "Albania Cup",
            "shortName": "ALB Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15364",
            "name": "Colombia Copa Cup",
            "shortName": "COL Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16365",
            "name": "Tunisian Cup",
            "shortName": "T C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18367",
            "name": "Belarus Cup",
            "shortName": "BLR CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19368",
            "name": "Montenegro Cup",
            "shortName": "MNE CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10460",
            "name": "Saudi Kings Cup",
            "shortName": "SK CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13463",
            "name": "Asian CQ",
            "shortName": "Asian CQ",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15465",
            "name": "Chinese Women’s Super League",
            "shortName": "CWPL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "16466",
            "name": "Estonia Cup",
            "shortName": "EST CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17467",
            "name": "Georgia Cup",
            "shortName": "GEO C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18468",
            "name": "FIFA World Cup qualification (AFC)",
            "shortName": "FIFA WCQL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19469",
            "name": "FIFA World Cup qualification (OFC)",
            "shortName": "WCPO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10561",
            "name": "FIFA World Cup qualification (UEFA)",
            "shortName": "WCPEU",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11562",
            "name": "FIFA World Cup qualification (CAF)",
            "shortName": "WCPAF",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12563",
            "name": "FIFA World Cup qualification (CONMEBOL)",
            "shortName": "WCPSA",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13564",
            "name": "FIFA World Cup qualification (CONCACAF)",
            "shortName": "WCPCA",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14565",
            "name": "Slovakia Cup U18",
            "shortName": "SVKCU18",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15566",
            "name": "AFC Futsal Championship",
            "shortName": "AFC FC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16567",
            "name": "Honduras Liga Nacional off",
            "shortName": "H L N O",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17568",
            "name": "Malta Cup",
            "shortName": "MAL Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18569",
            "name": "Croatia Off",
            "shortName": "Croatia O",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29560",
            "name": "TURKEY IZMIR CUP",
            "shortName": "TUR IC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11663",
            "name": "GAM C",
            "shortName": "GAM C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13665",
            "name": "Turkey Bodrum Cup",
            "shortName": "Tur BoC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14666",
            "name": "Canadian Championship",
            "shortName": "CAN CHL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15667",
            "name": "Montenegro Prva Crnogorska Off",
            "shortName": "MOPCLO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16668",
            "name": "Sukma Malaysia",
            "shortName": "Sukma M",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "28660",
            "name": "Baltic Cup",
            "shortName": "Baltic Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10763",
            "name": "Denmark Woman's League play off",
            "shortName": "DEN WPO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11764",
            "name": "CUFC",
            "shortName": "CUFC",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "12765",
            "name": "China U17",
            "shortName": "CHA U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13766",
            "name": "CONCACAF Futsal Championship",
            "shortName": "CNCF FC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14767",
            "name": "Finland U19",
            "shortName": "F U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "27760",
            "name": "Italian Campionato Nazionale Primavera",
            "shortName": "ITA YTHL",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "28761",
            "name": "MaLaiXiYaYouthCup",
            "shortName": "MLYCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29762",
            "name": "CONCACAF Women Under 20",
            "shortName": "CNCF WU20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10864",
            "name": "Prince Faisal bin Fahad Cup",
            "shortName": "Prince.Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11865",
            "name": "Argentinian Primera B Play-off",
            "shortName": "APBoff",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12866",
            "name": "CONMEBOL Futsal Championship",
            "shortName": "CONMEBOLFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13867",
            "name": "Uruguay Paly Off",
            "shortName": "URU PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14868",
            "name": "Spanish Queen Cup",
            "shortName": "S Q C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15869",
            "name": "Korea National Championship",
            "shortName": "KOR NCH",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "26860",
            "name": "Chinese Football Association Yi League",
            "shortName": "CHA D2",
            "type": 1,
            "subLeagueName": "Group C"
        },
        {
            "leagueId": "27861",
            "name": "Jordan Sh Cup",
            "shortName": "JOR ShC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "28862",
            "name": "Slovenija - Superpokal",
            "shortName": "SLO SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29863",
            "name": "AFF U-16 Youth Championship",
            "shortName": "AFF U16",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10965",
            "name": "Nordic Tournament Womens U23",
            "shortName": "NTW U23",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11966",
            "name": "CONCACAF Women Under-17",
            "shortName": "CNCF W U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13968",
            "name": "German 3.Liga",
            "shortName": "GER D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "14969",
            "name": "China Reserves League",
            "shortName": "China RL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "25960",
            "name": "Japan Club Youth Football Championship",
            "shortName": "JCYF",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "26961",
            "name": "EGY SC",
            "shortName": "EGY SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "27962",
            "name": "Nordic Tournament U17",
            "shortName": "NT U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "28963",
            "name": "France Super Cup",
            "shortName": "FRA SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29964",
            "name": "Under 17 Gulf Cup of Nations",
            "shortName": "GF C U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10077",
            "name": "Thai Premier League",
            "shortName": "THA PR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11078",
            "name": "Malta Super Cup",
            "shortName": "MAL SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13070",
            "name": "Hungary NB Ⅱ",
            "shortName": "HUN D2E",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "14071",
            "name": "Spain Supercopa de Espana",
            "shortName": "SPA SUC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15072",
            "name": "Turkey Super Cup",
            "shortName": "TUR SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16073",
            "name": "Czech Republic Ceska Fotbalova Liga",
            "shortName": "CZE CFL",
            "type": 1,
            "subLeagueName": "Group B"
        },
        {
            "leagueId": "17074",
            "name": "JOR SUC",
            "shortName": "JOR SUC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19076",
            "name": "Latvian Play off",
            "shortName": "Latvianoff",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10178",
            "name": "Cyprus Super cup",
            "shortName": "CYP SCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11179",
            "name": "Israel Ligat Al Toto Cup",
            "shortName": "ISR LATTC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13171",
            "name": "England Northern Premier League",
            "shortName": "ENG-N PR",
            "type": 1,
            "subLeagueName": "Playoff Final"
        },
        {
            "leagueId": "14172",
            "name": "Chile Cup",
            "shortName": "Chile Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10279",
            "name": "Denmark Womans League",
            "shortName": "DEN WD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11270",
            "name": "Bahraini King’s Cup",
            "shortName": "BHR Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12271",
            "name": "A-League National Youth League",
            "shortName": "AUS YL",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "13272",
            "name": "ItalyC2-C",
            "shortName": "ItC2-A",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14273",
            "name": "Chinese STU",
            "shortName": "Chinese STU",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15274",
            "name": "Women’s ASEAN Football Championship",
            "shortName": "AFFWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16275",
            "name": "AFF U-19 Youth Championship",
            "shortName": "AFF U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18277",
            "name": "Sweden Folksam U 21-slutspel",
            "shortName": "SWEU21PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19278",
            "name": "Australia W-League",
            "shortName": "AUS WAL",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "10370",
            "name": "FIFA U-17 Women's World Cup",
            "shortName": "WCWU17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11371",
            "name": "AFC U-19 Women’s Championship",
            "shortName": "AFC WU19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12372",
            "name": "China U17 CUP",
            "shortName": "CHN U17 C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13373",
            "name": "UAE Etisalat Emirates Cup",
            "shortName": "UAE",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14374",
            "name": "CONCACAF Championship U17",
            "shortName": "CNCF U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15375",
            "name": "Hong Kong Senior Challenge Shield",
            "shortName": "HK SS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16376",
            "name": "Italian Youth Cup",
            "shortName": "ITA YCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17377",
            "name": "COPPA ITALIA LEGA PRO",
            "shortName": "ITA LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18378",
            "name": "North African Cup",
            "shortName": "NAFCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19379",
            "name": "Turkey Youth League",
            "shortName": "TUR YL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "10471",
            "name": "UAE Division 1 Group A",
            "shortName": "UAE D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11472",
            "name": "UEFA U21 Futsal Championship",
            "shortName": "UEFA U21FC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13474",
            "name": "Italy Serie C2",
            "shortName": "ITA C2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "14475",
            "name": "Japan Womens Football Championships",
            "shortName": "JWFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15476",
            "name": "Saudi Arabia Division 1",
            "shortName": "KSA D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "16477",
            "name": "Prince Faisal bin Fahad CupU23",
            "shortName": "PrinceU23",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17478",
            "name": "Bahraini FA Cup",
            "shortName": "BHR FAC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18479",
            "name": "Northern Ireland IFA Championship",
            "shortName": "NIR CH",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "29470",
            "name": "Saudi Arabia Youth League",
            "shortName": "KSA YTH",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10572",
            "name": "Turkey Bayanlar 1. Ligi",
            "shortName": "TUR WD1",
            "type": 1,
            "subLeagueName": "Semifinal"
        },
        {
            "leagueId": "11573",
            "name": "Brasil Copa SP Juniores",
            "shortName": "CSP YC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12574",
            "name": "Saudi U-17 Premier League",
            "shortName": "KSA U17",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "13575",
            "name": "Turkey U18",
            "shortName": "TUR U18",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "14576",
            "name": "Norway Youth Cup",
            "shortName": "Nor YC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15577",
            "name": "Scandinavia Color Line Youth Cup",
            "shortName": "SCA CLY Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17579",
            "name": "Northern Ireland Cup",
            "shortName": "NIR CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "28570",
            "name": "King Cup in Thailand",
            "shortName": "KCTH",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13676",
            "name": "India League Division 1",
            "shortName": "IND D1",
            "type": 1,
            "subLeagueName": "Championship"
        },
        {
            "leagueId": "14677",
            "name": "Pan-Pacific Championship",
            "shortName": "PPC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15678",
            "name": "CAF Super Cup",
            "shortName": "Non-Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16679",
            "name": "V.League 1",
            "shortName": "VIE D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "27670",
            "name": "Holland Eredivisie Beloften 2",
            "shortName": "HOL BD2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "28671",
            "name": "Futsal Division De Honor",
            "shortName": "F.D.D.H",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29672",
            "name": "WAUS WPR",
            "shortName": "WAUS WPR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "11775",
            "name": "Malaysia President Cup",
            "shortName": "MAS PDC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12776",
            "name": "Uzbek League",
            "shortName": "UZB D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "13777",
            "name": "Iceland League Cup",
            "shortName": "ICE LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14778",
            "name": "Australia Brisbane Premier League",
            "shortName": "AUS BPL",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "15779",
            "name": "Norway Super Cup",
            "shortName": "NSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29773",
            "name": "South Africa League Cup",
            "shortName": "SALC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10875",
            "name": "Japan Football League",
            "shortName": "JPN JFL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11876",
            "name": "CAF U-17 Championship",
            "shortName": "AYC U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13878",
            "name": "Israel B League",
            "shortName": "ISR D3",
            "type": 1,
            "subLeagueName": "Promotion Finals"
        },
        {
            "leagueId": "25870",
            "name": "Sweden women's super cup",
            "shortName": "SWSC-W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "26871",
            "name": "Norway Junior Elite Tournament",
            "shortName": "NOR JET",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "27872",
            "name": "TOTE C",
            "shortName": "TOTE C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "28873",
            "name": "Portugal Champions NACIONAL Juniores B Play-Off",
            "shortName": "PORJB-PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12978",
            "name": "FRA FCC",
            "shortName": "FRA FCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "24970",
            "name": "Armenia Cup",
            "shortName": "ARM CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "25971",
            "name": "Japan Prince League U18",
            "shortName": "JPN U18",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "26972",
            "name": "China National Games – Women’s Football",
            "shortName": "CHN NGFW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "28974",
            "name": "AFC Women’s Asian Cup Qualifying Tournament",
            "shortName": "Asian CQW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12080",
            "name": "USA Women",
            "shortName": "USA WD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "15083",
            "name": "Hong Kong Reserve Division",
            "shortName": "HK RL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16084",
            "name": "The Wembley Cup",
            "shortName": "Wembley Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17085",
            "name": "Czech Republic U19 League",
            "shortName": "CZE U19",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "18086",
            "name": "South Africa Play Off",
            "shortName": "SAPO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11180",
            "name": "Albania Super league Play-off",
            "shortName": "ALBPO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16185",
            "name": "Denmark Youth U19",
            "shortName": "DAN U19",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11281",
            "name": "Poland II Liga Play-off",
            "shortName": "POL D2PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12282",
            "name": "Malaysia Intercontinental Cup",
            "shortName": "INT Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13283",
            "name": "Uzbekistan Cup",
            "shortName": "UzbC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14284",
            "name": "Syrian League Playoff",
            "shortName": "SyrPO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15285",
            "name": "Poland - 1. Liga Play-off",
            "shortName": "POL D1 PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17287",
            "name": "WK League",
            "shortName": "KOR WD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10381",
            "name": "2009 CONCACAF Beach Soccer Championship",
            "shortName": "CBSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11382",
            "name": "China National Games - U16 Football",
            "shortName": "CSGU16",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12383",
            "name": "Spain Youth Cup",
            "shortName": "SPA YC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13384",
            "name": "Spain Women's League playoffs",
            "shortName": "SPA WD2PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14385",
            "name": "Audi Cup",
            "shortName": "Audi Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16387",
            "name": "Women's U16 Open Nordic Cup",
            "shortName": "ONW Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17388",
            "name": "BSWCP",
            "shortName": "BSWCP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "18389",
            "name": "Slovakian Super Cup",
            "shortName": "SVK Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29380",
            "name": "Bahrain Crown Prince Cup",
            "shortName": "BHR CPC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12484",
            "name": "German Super Cup",
            "shortName": "GER SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13485",
            "name": "Bra BHYC",
            "shortName": "Bra BHYC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14486",
            "name": "GF CUP U19",
            "shortName": "GF CUP U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15487",
            "name": "World Football Challenge",
            "shortName": "WFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16488",
            "name": "Sweden U19",
            "shortName": "SWE U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17489",
            "name": "Mexico Primera Divison A",
            "shortName": "MEX D2",
            "type": 1,
            "subLeagueName": "Apertura"
        },
        {
            "leagueId": "10583",
            "name": "Australia New South Wales Premier League Playoff",
            "shortName": "AUS NSW PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11584",
            "name": "ONGC Nehru Cup",
            "shortName": "ONC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12585",
            "name": "Turkey A2 League Grupo North U20",
            "shortName": "TA2 LG-N",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "28581",
            "name": "Israel Ligat Leumit Toto Cup",
            "shortName": "ISR LLTTC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11685",
            "name": "English Women's Conference South",
            "shortName": "EWSL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "13687",
            "name": "Algerian Ligue Professionnelle 2",
            "shortName": "ALG D2",
            "type": 1,
            "subLeagueName": "West"
        },
        {
            "leagueId": "28682",
            "name": "Totesport League1",
            "shortName": "TOTEE-L1",
            "type": 1,
            "subLeagueName": "East"
        },
        {
            "leagueId": "12787",
            "name": "Ukraine Division 2",
            "shortName": "UKR D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "13788",
            "name": "Bulgaria Reserves League",
            "shortName": "BUL RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "14789",
            "name": "Russia Women's Cup",
            "shortName": "RUS WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "25780",
            "name": "Women World Cup Europe Qualifying",
            "shortName": "WWCPE",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29784",
            "name": "France U17 League",
            "shortName": "FL U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10886",
            "name": "Andorra Super league",
            "shortName": "ANDSL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "11887",
            "name": "Japan Takamado Cup U18",
            "shortName": "JTCU18",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12888",
            "name": "Thai FA Cup",
            "shortName": "TH FC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "24880",
            "name": "Saudi Arabia Youth Cup",
            "shortName": "SAYC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "27883",
            "name": "UAE Super Cup",
            "shortName": "UAE SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "28884",
            "name": "Bahrain National Youth League",
            "shortName": "BHR YTH",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "29885",
            "name": "Copa Libertadores Femenino",
            "shortName": "LIB CF",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11988",
            "name": "KSA FC U17",
            "shortName": "KSA FC U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12989",
            "name": "World Cup (Preliminaries) Play-Offs",
            "shortName": "WCP-PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "23980",
            "name": "Hungary U19 A League",
            "shortName": "HUN U19A",
            "type": 1,
            "subLeagueName": "Relegation Quarterfinals"
        },
        {
            "leagueId": "24981",
            "name": "Bulgaria U17",
            "shortName": "BUL U17",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "26983",
            "name": "Bahrain Division",
            "shortName": "BHR D",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "27984",
            "name": "Lithuania - 2.Division",
            "shortName": "LIT D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "28985",
            "name": "Azadegan League",
            "shortName": "IRN D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "29986",
            "name": "UAE Federation Cup",
            "shortName": "UAE F C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12091",
            "name": "Primera Division de Ecuador PlayOff",
            "shortName": "ECU PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15094",
            "name": "United Arab Emirates U19",
            "shortName": "UAE U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17096",
            "name": "South Africa First League",
            "shortName": "SAFL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "18097",
            "name": "Greece U21",
            "shortName": "GRE U21",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "19098",
            "name": "United Arab Emirates U17",
            "shortName": "UAE U17",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "10190",
            "name": "Ireland  Play Off",
            "shortName": "IRE PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15195",
            "name": "Cyprus 2 Division",
            "shortName": "CYP D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "16196",
            "name": "Holland Youth Cup",
            "shortName": "HY Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "17197",
            "name": "Argentina Prim C Metropolitana",
            "shortName": "ARG B M",
            "type": 1,
            "subLeagueName": "Autumn"
        },
        {
            "leagueId": "18198",
            "name": "Malaysia King's Gold Cup",
            "shortName": "MAS KGC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12293",
            "name": "Turkey Bayanlar 2. Ligi",
            "shortName": "TUR WD2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "13294",
            "name": "Kuwait first Division Leagus",
            "shortName": "KUW D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "15296",
            "name": "Oman Sultan Cup",
            "shortName": "OMA Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "16297",
            "name": "Kuwait Youth League",
            "shortName": "Kuw YL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "17298",
            "name": "Ukraine U21 Liga",
            "shortName": "UKR U21",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "18299",
            "name": "Kuwait U17",
            "shortName": "Kuw U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10392",
            "name": "Brazil Youth",
            "shortName": "Bra YL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "11393",
            "name": "North Africa  Youth Cup",
            "shortName": "N AFR YC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12394",
            "name": "Algeria U20 Youth League",
            "shortName": "ALG U21",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "13395",
            "name": "Totesport  Premier League-E",
            "shortName": "TOTEPL-E",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "14396",
            "name": "Totesport  Premier League-W",
            "shortName": "TOTEPL-W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "17399",
            "name": "India Federation Cup",
            "shortName": "IND FC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "28390",
            "name": "THA SC",
            "shortName": "THA SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29391",
            "name": "UAE RL",
            "shortName": "UAE RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "10493",
            "name": "Cyprus Youth U21 League",
            "shortName": "CYP U21",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "12495",
            "name": "ISR YCU17",
            "shortName": "ISR YCU17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13496",
            "name": "Israel U20 Cup",
            "shortName": "ISR YCU20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "14497",
            "name": "Syrian Youth League",
            "shortName": "SYR YTH",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15498",
            "name": "Tun Cup U21",
            "shortName": "Tun Cup U21",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "27490",
            "name": "Israel Women First National",
            "shortName": "ISR W1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "29492",
            "name": "Nigerian Premier League",
            "shortName": "NGA PR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "10594",
            "name": "Saudi Arabia Division 2",
            "shortName": "KSA D2",
            "type": 1,
            "subLeagueName": "3rd Place"
        },
        {
            "leagueId": "11595",
            "name": "Spanish Bizkaia-Tercera Division",
            "shortName": "Spain D4",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "12596",
            "name": "Israel Youth League",
            "shortName": "ISR U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "13597",
            "name": "Botola 2",
            "shortName": "MAR D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "14598",
            "name": "Copa UC Sub 17",
            "shortName": "UCS17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "15599",
            "name": "Greece U17",
            "shortName": "Greece U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "27591",
            "name": "Brazil Campeonato Cearense Division 1",
            "shortName": "BRA CE",
            "type": 1,
            "subLeagueName": "Finals"
        },
        {
            "leagueId": "28592",
            "name": "Norway Sogndal Elite Tourament U16",
            "shortName": "NOR SET U16",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29593",
            "name": "Israel's national league U17",
            "shortName": "ISR U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10695",
            "name": "Bra CaP",
            "shortName": "Bra PL",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "11696",
            "name": "BRA CGD",
            "shortName": "BRA CGD",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "12697",
            "name": "Brazil Campeonato Catarinense Division 1",
            "shortName": "BRA CCD1",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "13698",
            "name": "Brazil Pernambucano League",
            "shortName": "BRA PE",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "14699",
            "name": "Brazil Campeonato Gaucho",
            "shortName": "BRA CGD1",
            "type": 1,
            "subLeagueName": "Final (1)"
        },
        {
            "leagueId": "27692",
            "name": "Mexico Youth U20",
            "shortName": "MEX U20",
            "type": 1,
            "subLeagueName": "Apertura"
        },
        {
            "leagueId": "28693",
            "name": "OFC Women's U20 Championship",
            "shortName": "OFC W U20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29694",
            "name": "Belgian U21",
            "shortName": "BEL U21",
            "type": 1,
            "subLeagueName": "Group A"
        },
        {
            "leagueId": "11797",
            "name": "Brazil Campeonato Mineiro Division 1",
            "shortName": "BRA MG",
            "type": 1,
            "subLeagueName": "Trofeu Inconfidencia Final"
        },
        {
            "leagueId": "13799",
            "name": "Brazil Campeonato Baiano Division",
            "shortName": "BRA CBD",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "24790",
            "name": "Conmebol-Sudamericano Women U17",
            "shortName": "CON WU17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "26792",
            "name": "Yemen League Division 2",
            "shortName": "YEM D2",
            "type": 1,
            "subLeagueName": "Group B"
        },
        {
            "leagueId": "27793",
            "name": "McInerney Ford Night Series Division",
            "shortName": "AUS FWD1",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "28794",
            "name": "Australia West Premier Bam Creative Night Series",
            "shortName": "AUS PLNS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "29795",
            "name": "SAGA",
            "shortName": "SAGA",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "10897",
            "name": "Thailand Queen's Cup",
            "shortName": "THA QC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "24891",
            "name": "ISR WC",
            "shortName": "ISR WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "26893",
            "name": "TOTEPL-C",
            "shortName": "TOTEPL-C",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "27894",
            "name": "BRA CP",
            "shortName": "BRA CP",
            "type": 1,
            "subLeagueName": "Finals"
        },
        {
            "leagueId": "22990",
            "name": "Women’s West Asian Football Federation Championshi",
            "shortName": "WAWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "23991",
            "name": "Bahrain U17",
            "shortName": "BHRU17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "24992",
            "name": "Malta Women Division 1",
            "shortName": "Mal WD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "25993",
            "name": "Bahrain Youth Cup",
            "shortName": "BHR YC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "26994",
            "name": "Yemen Unity Cup",
            "shortName": "YEMC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "27995",
            "name": "Estonia Super Cup",
            "shortName": "EST SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "28996",
            "name": "Brazil Paraibano",
            "shortName": "BRA PB",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "29997",
            "name": "Belarus Super Cup",
            "shortName": "BS Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "100011",
            "name": "Malta First Division League",
            "shortName": "MAL D2",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "170018",
            "name": "Bulgaria Third League",
            "shortName": "BUL TL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "180019",
            "name": "Kuwaiti Youth Federation Cup",
            "shortName": "KUW FeC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "190010",
            "name": "Iceland Women's League Cup",
            "shortName": "ICE WLC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "101012",
            "name": "South Africa Premier League Cup",
            "shortName": "SAPL  CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "111013",
            "name": "Korea Reserves League",
            "shortName": "KRL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "121014",
            "name": "ALG C",
            "shortName": "ALG C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "141016",
            "name": "Moldova Division 2",
            "shortName": "MOL D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "161018",
            "name": "English Women's Conference North",
            "shortName": "ENG WNPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "181010",
            "name": "Iran U21 Liga",
            "shortName": "Iran U21",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "132016",
            "name": "West African Football Union",
            "shortName": "WAFU",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "152018",
            "name": "OFC Women's U17 Championship",
            "shortName": "OFC W U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "182011",
            "name": "Qatar Prince Cup",
            "shortName": "QAT PC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "192012",
            "name": "FFSA Premier League",
            "shortName": "AUS SASL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "113015",
            "name": "Qatar Crown Prince Cup",
            "shortName": "QCP Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "123016",
            "name": "GER D5",
            "shortName": "GER D5",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "133017",
            "name": "Malaysia FAM Cup",
            "shortName": "MAS FAMC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "153019",
            "name": "England Conference North Division playoffs",
            "shortName": "ENG CND PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "183012",
            "name": "ENG RESP",
            "shortName": "ENG RESP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "114016",
            "name": "Danish U17",
            "shortName": "DAN U17",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "124017",
            "name": "SVK U19 A",
            "shortName": "SVK U19 A",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "134018",
            "name": "Estonia Esi Liiga",
            "shortName": "EST D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "144019",
            "name": "AFC Presidents Cup",
            "shortName": "AFC PC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "154010",
            "name": "WBCUP",
            "shortName": "WBCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "164011",
            "name": "Belarus Pershaya Liga",
            "shortName": "BLR D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "174012",
            "name": "Iceland Women's Premier League",
            "shortName": "ICE WPR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "184013",
            "name": "Thai Division 1 League",
            "shortName": "THA D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "194014",
            "name": "Russia Womens Premier League",
            "shortName": "RUS WPL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "105016",
            "name": "Faroe Islands Cup",
            "shortName": "FAR Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "115017",
            "name": "African Cup of Nations for Women",
            "shortName": "CAF WNC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "125018",
            "name": "African Nations Championship",
            "shortName": "CAF SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "135019",
            "name": "Turkey A2 League Grupo Play Off",
            "shortName": "TUR A2LPO",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "145010",
            "name": "Iraqi Premier League",
            "shortName": "IRQ D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "155011",
            "name": "DWL U18",
            "shortName": "DWL U18",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "165012",
            "name": "Hungary Womens Division 1 League",
            "shortName": "HUN WD1",
            "type": 1,
            "subLeagueName": "Championship Final"
        },
        {
            "leagueId": "175013",
            "name": "Malta Cup(W)",
            "shortName": "MAL Cup (W)",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "185014",
            "name": "Yemeni President Cup",
            "shortName": "YEM FAC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "195015",
            "name": "Slovakia Divison A-East",
            "shortName": "SVK D2-E",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "116018",
            "name": "Serbia Prva Liga",
            "shortName": "SER D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "126019",
            "name": "Armenia Division 2",
            "shortName": "ARM D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "136010",
            "name": "Australia Capital Gatorade Premier League",
            "shortName": "AUS CGP",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "146011",
            "name": "AUS NSWC",
            "shortName": "AUS NSWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "156012",
            "name": "Brasil Campeonato do Nordeste Primeira",
            "shortName": "BRA CNF",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "166013",
            "name": "Slovakia Divison A-West",
            "shortName": "SVK D1-W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "176014",
            "name": "Bulgaria Woman's C",
            "shortName": "B W C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "186015",
            "name": "QLD Premier League",
            "shortName": "AUS QSL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "196016",
            "name": "SAUS FCup",
            "shortName": "SAUS FCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "107018",
            "name": "Latvia Division 2",
            "shortName": "LAT D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "127010",
            "name": "FFSA PL",
            "shortName": "FFSA PL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "137011",
            "name": "Victorian State League Division 1",
            "shortName": "Aus VD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "147012",
            "name": "ICE WC",
            "shortName": "ICE WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "157013",
            "name": "Australia Brisbane Cup",
            "shortName": "Aus BCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "167014",
            "name": "Paraguayan Division 2",
            "shortName": "PAR D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "177015",
            "name": "Kazakhstan Division 1",
            "shortName": "KAZ D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "187016",
            "name": "Jordan League Division 1",
            "shortName": "JOR D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "197017",
            "name": "Estonia Womens Meistri Liiga",
            "shortName": "EST WD2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "108019",
            "name": "Czech Republic Super Cup",
            "shortName": "CZE SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "138012",
            "name": "Iceland Division 2",
            "shortName": "ICE D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "148013",
            "name": "Iraqi League",
            "shortName": "Iraqi League",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "158014",
            "name": "Denmark Reserve League",
            "shortName": "DEN RL",
            "type": 1,
            "subLeagueName": "Second Round A"
        },
        {
            "leagueId": "168015",
            "name": "Belarus Womens Premier League",
            "shortName": "BWPL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "178016",
            "name": "African Youth Championship",
            "shortName": "CAF YC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "109010",
            "name": "Bulgaria U19",
            "shortName": "BUL U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "129012",
            "name": "Scotland WPL",
            "shortName": "SCO WPL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "149014",
            "name": "Youth Olympic Games Men's Soccer",
            "shortName": "MOFT U15",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "199019",
            "name": "KSCUP",
            "shortName": "KSCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "120114",
            "name": "Qatar Sheikh Jasim Cup",
            "shortName": "QSJC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "140116",
            "name": "Wales Cymru Alliance",
            "shortName": "WAL CA",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "160118",
            "name": "Turkey A2 League U19",
            "shortName": "TUR U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "170119",
            "name": "Slovenia U19",
            "shortName": "SLO U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "180110",
            "name": "Danish U18",
            "shortName": "Danish U18",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "131116",
            "name": "GRE U20",
            "shortName": "GRE U20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "141117",
            "name": "England Reserves League",
            "shortName": "ENG RES",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "151118",
            "name": "Welsh Football League First Division",
            "shortName": "WAL D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "161119",
            "name": "Georgia Division",
            "shortName": "GEO D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "181111",
            "name": "Prince Faisal bin Fahad CupU21",
            "shortName": "PFBFC",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "191112",
            "name": "Thai League Cup",
            "shortName": "THA LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "102114",
            "name": "Yemen Super Cup",
            "shortName": "YEM SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "112115",
            "name": "Women's World Cup (Qualifying) CONCACAF",
            "shortName": "WWCQ CONC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "122116",
            "name": "Indonesia Liga 1",
            "shortName": "IDN ISL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "132117",
            "name": "Conmebol-Sudamericano Women",
            "shortName": "CON W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "142118",
            "name": "AFF Championship",
            "shortName": "AFF Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "152119",
            "name": "Albania Super Cup",
            "shortName": "ALB SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "162110",
            "name": "Spanish Federacion Cup",
            "shortName": "SPA FC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "172111",
            "name": "SYR D2",
            "shortName": "SYR D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "182112",
            "name": "OFC U-17 Championship",
            "shortName": "OFC U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "192113",
            "name": "Nile Basin Cup",
            "shortName": "Nile Basin Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "103115",
            "name": "Olympic pre-selection",
            "shortName": "OFC WOLQ",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "123117",
            "name": "Iceland Championship",
            "shortName": "ICE CH",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "133118",
            "name": "All Africa Soccer",
            "shortName": "AAS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "143119",
            "name": "Kazakhstan Super Cup",
            "shortName": "KAZ SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "153110",
            "name": "Western Australia Cup",
            "shortName": "WAUS LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "163111",
            "name": "Olympic (Preliminaries) Asian-Woman",
            "shortName": "OPAW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "173112",
            "name": "K League U-18 Challenge League",
            "shortName": "KOR U18",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "183113",
            "name": "Olympic (Preliminaries) African",
            "shortName": "OPAF",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "193114",
            "name": "IDN PL",
            "shortName": "IDN PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "104116",
            "name": "Kuwaiti Federation Cup U17",
            "shortName": "KUWC U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "114117",
            "name": "BLR WCUP",
            "shortName": "BLR WCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "134119",
            "name": "HUN WCup",
            "shortName": "HUN WCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "144110",
            "name": "Finland Woman's Cup",
            "shortName": "FINWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "154111",
            "name": "North American Soccer League",
            "shortName": "NAL",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "174113",
            "name": "England FA Women Super League",
            "shortName": "ENG FAWSL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "184114",
            "name": "Iceland Super Cup",
            "shortName": "ICE SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "194115",
            "name": "OFC U-20 Championship",
            "shortName": "OFCCU20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "115118",
            "name": "Germany Woman",
            "shortName": "GER WBC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "135110",
            "name": "BEL WC",
            "shortName": "BEL WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "145111",
            "name": "Estonia Teine Liiga",
            "shortName": "EST D3",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "195116",
            "name": "POL WD1",
            "shortName": "POL WD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "106118",
            "name": "Uzbekistan Second League",
            "shortName": "UZB D1",
            "type": 1,
            "subLeagueName": "Group A"
        },
        {
            "leagueId": "126110",
            "name": "Peru Copa Inca",
            "shortName": "Peru Copa Inca",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "146112",
            "name": "UEFA European U-21 Football Championship",
            "shortName": "UEFA U21",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "166114",
            "name": "BUL D2 PO",
            "shortName": "BUL D2 PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "176115",
            "name": "Copa Libertadores U20",
            "shortName": "LIBC U20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "196117",
            "name": "Colombia Copa Premier",
            "shortName": "COL D2",
            "type": 1,
            "subLeagueName": "Autumn"
        },
        {
            "leagueId": "107119",
            "name": "Egypt Division 2",
            "shortName": "EGY D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "117110",
            "name": "Olympics(N And C American) Quali-Woman",
            "shortName": "NCAOW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "137112",
            "name": "Moldova Super Cup",
            "shortName": "MOL SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "147113",
            "name": "Arab Youth Tourament",
            "shortName": "Arab Youth",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "157114",
            "name": "Korea Women FA Cup",
            "shortName": "KOR FAC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "167115",
            "name": "USA Reserves League",
            "shortName": "USA RL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "177116",
            "name": "North and Central American Olympics Qualifiers",
            "shortName": "NCAO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "187117",
            "name": "Dublin Super Cup",
            "shortName": "Dublin SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "108110",
            "name": "Women's World University Football Tournament",
            "shortName": "WWUFT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "118111",
            "name": "Men's World University Football Tournament",
            "shortName": "MWUFT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "138113",
            "name": "Argentina Cup",
            "shortName": "ARG C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "148114",
            "name": "Venezuela Cup",
            "shortName": "VEN CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "158115",
            "name": "OP AFW",
            "shortName": "OP AFW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "168116",
            "name": "Spanish Ladies Premier League",
            "shortName": "SPA WD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "178117",
            "name": "Malaysia Reserves Cup",
            "shortName": "MAS RESC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "198119",
            "name": "PDRM CUP",
            "shortName": "PDRMC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "109111",
            "name": "Armenia Super Cup",
            "shortName": "ARM SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "119112",
            "name": "Czech Republic Cambrinus Liga Women's",
            "shortName": "CZE W1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "129113",
            "name": "Turkey A2 League 1.Grup",
            "shortName": "TUR A2",
            "type": 1,
            "subLeagueName": "2nd Leg of Group 8"
        },
        {
            "leagueId": "169117",
            "name": "CONCACAF Women Under 20",
            "shortName": "CNCF WU20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "179118",
            "name": "INDSC",
            "shortName": "INDSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "180211",
            "name": "Scotland Women FA Cup",
            "shortName": "Sco WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "190212",
            "name": "England Continental Cup",
            "shortName": "ENG CWCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "111215",
            "name": "CS U15",
            "shortName": "CS U15",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "121216",
            "name": "SAG",
            "shortName": "SAG",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "131217",
            "name": "Council of East and Central Africa Football Associ",
            "shortName": "CECAFA CC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "141218",
            "name": "Qatar B",
            "shortName": "QAT D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "151219",
            "name": "ENG SD1",
            "shortName": "ENG SD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "161210",
            "name": "England Northern League Division One",
            "shortName": "ENG UD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "171211",
            "name": "Italian Women Division 1",
            "shortName": "IWD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "181212",
            "name": "FIFA Futsal World Cup qualification (UEFA)",
            "shortName": "Futsal WCPEU",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "191213",
            "name": "Beach Soccer Lagos Cup",
            "shortName": "Lagos Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "102215",
            "name": "Gulf Cup U20",
            "shortName": "Gulf Cup U20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "112216",
            "name": "Iran U23 Liga",
            "shortName": "IRN U23",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "122217",
            "name": "Professional Tunisian League 2",
            "shortName": "TTLd",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "132218",
            "name": "Granatkin Memorial Cup U18",
            "shortName": "GMC U18",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "142219",
            "name": "Andorra CUP",
            "shortName": "And Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "152210",
            "name": "Copa del Sol",
            "shortName": "Copa del Sol",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "162211",
            "name": "CAN W-U20",
            "shortName": "CAN W-U20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "172212",
            "name": "Indonesia Division 1",
            "shortName": "IDN D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "182213",
            "name": "Female South American U17",
            "shortName": "FSA W U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "192214",
            "name": "Beach Soccer Intercontinental Cup",
            "shortName": "BSIC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "103216",
            "name": "Carling Nations Cup",
            "shortName": "CNCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "113217",
            "name": "Uruguay Torneo Preparacion",
            "shortName": "Uruguay Torneo Preparacion",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "123218",
            "name": "Copa America Beach Soccer",
            "shortName": "CABS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "163212",
            "name": "Turkey Spor Toto Cup",
            "shortName": "TUR STC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "104217",
            "name": "Indonesia  Cup",
            "shortName": "IDN C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "114218",
            "name": "Italy C1 SuperCup",
            "shortName": "ITA C1SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "124219",
            "name": "FYR Macedonia Vtora Fudbalska Liga",
            "shortName": "MKD D2",
            "type": 1,
            "subLeagueName": "East"
        },
        {
            "leagueId": "144211",
            "name": "Mundialito de Clubes Beach Soccer",
            "shortName": "MCBS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "154212",
            "name": "Dutch Cup(W)",
            "shortName": "HOL Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "164213",
            "name": "GEO SC",
            "shortName": "GEO SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "174214",
            "name": "French Championnat National U19 Play Off",
            "shortName": "FRA U19 PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "184215",
            "name": "Vietnamese First Division",
            "shortName": "VIE D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "194216",
            "name": "Austrian Frauen Bundesliga",
            "shortName": "AFB",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "115219",
            "name": "Iceland Women's Division 1",
            "shortName": "ICE LD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "125210",
            "name": "Arab Nations Cup",
            "shortName": "ARAB CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "135211",
            "name": "Arab Cup U-17",
            "shortName": "Arab U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "145212",
            "name": "Arab Cup U20",
            "shortName": "Arab Cup U20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "155213",
            "name": "Australia New South Wales Super League",
            "shortName": "AUS NSWSL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "175215",
            "name": "Eusebio Cup",
            "shortName": "Eusebio Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "185216",
            "name": "Czech Republic U21 League",
            "shortName": "CZE U21",
            "type": 1,
            "subLeagueName": "Championship Group"
        },
        {
            "leagueId": "106219",
            "name": "England U21 Premier League",
            "shortName": "ENG U21",
            "type": 1,
            "subLeagueName": "Final of Group B"
        },
        {
            "leagueId": "126211",
            "name": "Bulgaria B PFG",
            "shortName": "BUL D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "146213",
            "name": "England U21 Professional Development League 2",
            "shortName": "ENG U21D2",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "156214",
            "name": "Vietnamese National Cup",
            "shortName": "VIE Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "166215",
            "name": "Estonia cup (w)",
            "shortName": "Estonia cup (w)",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "186217",
            "name": "Oman Cup",
            "shortName": "Oman Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "196218",
            "name": "The Next Generation Series",
            "shortName": "Euro U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "107210",
            "name": "Benelux Women BeNe League",
            "shortName": "BENL BNL",
            "type": 1,
            "subLeagueName": "Orange"
        },
        {
            "leagueId": "117211",
            "name": "PER SC",
            "shortName": "PER SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "127212",
            "name": "Ukraine U19 Liga",
            "shortName": "UKR U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "137213",
            "name": "Lebanese Elite Cup",
            "shortName": "Lbn EC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "147214",
            "name": "LBN SC",
            "shortName": "LBN SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "157215",
            "name": "Brazil Youth cup",
            "shortName": "BRA YCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "177217",
            "name": "Argentina Supercopa",
            "shortName": "ARG SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "187218",
            "name": "A.Division start Invitational tournament",
            "shortName": "A.D.tor",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "197219",
            "name": "FIFA Women's Futsal World Cup",
            "shortName": "Futsal WTW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "108211",
            "name": "Beach Soccer World Cup Asian qualifiers",
            "shortName": "WCA S",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "118212",
            "name": "Italy Futsal",
            "shortName": "YDL Futsal",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "128213",
            "name": "Beach Soccer World Cup - CONMEBOL Qualifier",
            "shortName": "CONMEBOL QF",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "138214",
            "name": "Futsal Russia Division De Honor",
            "shortName": "RUS FDH",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "148215",
            "name": "Vietnam Super Cup",
            "shortName": "VSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "158216",
            "name": "Malta AME cup",
            "shortName": "AMEC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "168217",
            "name": "MeiZhou New Year Cup",
            "shortName": "NYCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "298210",
            "name": "Women in American Games",
            "shortName": "WAG",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "109212",
            "name": "Central American Games",
            "shortName": "CAG",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "119213",
            "name": "Sweden Folksam U21 Superettan",
            "shortName": "SWE U21",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "129214",
            "name": "K League 2",
            "shortName": "KOR D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "149216",
            "name": "Tournoi de Montaigu U16",
            "shortName": "TM U16",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "179219",
            "name": "Beach Soccer World Cup Africa qualifiers",
            "shortName": "WCA S",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "299211",
            "name": "International Champions Cup",
            "shortName": "ICC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "100314",
            "name": "Tunisia League Cup",
            "shortName": "Tun LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "110315",
            "name": "Australia FFV State Knockout Cup",
            "shortName": "FFV Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "130317",
            "name": "Shanghai International Coccer Tournament",
            "shortName": "SH IT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "160310",
            "name": "Mediterranean Games - Football",
            "shortName": "MGF",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "170311",
            "name": "Beach Soccer World Cup",
            "shortName": "BSWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "180312",
            "name": "CRC C",
            "shortName": "CRC C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "190313",
            "name": "Chile Super Cup",
            "shortName": "CHI SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "101315",
            "name": "Beach Soccer Asian Cup",
            "shortName": "BSAC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "111316",
            "name": "South Africa Confederations Cup",
            "shortName": "SACC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "121317",
            "name": "Germany Liga Total Cup",
            "shortName": "Ger LTC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "151310",
            "name": "Europe BSWCP",
            "shortName": "Europe BSWCP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "161311",
            "name": "The lowlands of Scotland League",
            "shortName": "SCO LL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "181313",
            "name": "Omani Federation Cup",
            "shortName": "OMA FA Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "191314",
            "name": "Hungary U21 League",
            "shortName": "HUN U21",
            "type": 1,
            "subLeagueName": "Relegation Quarterfinals"
        },
        {
            "leagueId": "102316",
            "name": "China National Games - U18 Football",
            "shortName": "CSGU18",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "112317",
            "name": "China National Games – Women’s U18 Football",
            "shortName": "CSGU18",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "122318",
            "name": "OSN Cup",
            "shortName": "OSN Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "172313",
            "name": "UEFA Youth League U19",
            "shortName": "UEFA YL U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "182314",
            "name": "Luxembourg Cup",
            "shortName": "LUX Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "192315",
            "name": "England U21 League Cup",
            "shortName": "ENG U21LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "103317",
            "name": "England Reserves Cup",
            "shortName": "ENG RCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "113318",
            "name": "East Asian Games football Women",
            "shortName": "WEAG",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "123319",
            "name": "OFC Olympic Qualifying Tournament",
            "shortName": "OP OFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "133310",
            "name": "Algerian Cup",
            "shortName": "CAF YCQ",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "143311",
            "name": "Reykjavik Football Tournament",
            "shortName": "REYT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "153312",
            "name": "Indonesian Inter Island Cup",
            "shortName": "IDN IIC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "163313",
            "name": "Al Kass International Cup",
            "shortName": "INT Kass",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "173314",
            "name": "BRA RJYH",
            "shortName": "BRA RJYH",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "183315",
            "name": "BRA SPB",
            "shortName": "BRA PA",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "193316",
            "name": "BRA BA U20",
            "shortName": "BRA BA U20",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "104318",
            "name": "IFA Shield Tournament",
            "shortName": "IFA ST",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "124310",
            "name": "Uzbekistan PFL Cup",
            "shortName": "Uzbekistan Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "144312",
            "name": "Saudi Crown Prince Cup Qualifiers",
            "shortName": "SCPCupQ",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "154313",
            "name": "Women's football South American Games",
            "shortName": "SAme GF",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "164314",
            "name": "J-League Division 3",
            "shortName": "JPN D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "174315",
            "name": "Brasileiro, Serie C",
            "shortName": "BRA D3",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "184316",
            "name": "Mundialito de Clubes Beach Soccer",
            "shortName": "BSEWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "194317",
            "name": "Supercopa de Colombia",
            "shortName": "Cos Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "105319",
            "name": "Mexico SuperCopa",
            "shortName": "MEX SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "115310",
            "name": "Romania Cupa Ligii",
            "shortName": "ROMCL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "125311",
            "name": "Copa LFPB",
            "shortName": "Copa",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "135312",
            "name": "BRA D4",
            "shortName": "BRA D4",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "145313",
            "name": "SeasonSouth Africa MTN 8 Cup",
            "shortName": "MTN8",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "155314",
            "name": "Poland Division 2",
            "shortName": "POL D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "165315",
            "name": "Australia FFA Cup",
            "shortName": "A FFA Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "185317",
            "name": "BRA SPC",
            "shortName": "BRA SPC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "195318",
            "name": "Sandy Super Cup",
            "shortName": "KSA SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "116311",
            "name": "Beach Soccer World Cup Europe qualifiers",
            "shortName": "WCA S",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "126312",
            "name": "On Road Super Cup",
            "shortName": "ORD SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "136313",
            "name": "Hong Kong First Division League",
            "shortName": "HK D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "146314",
            "name": "Turkey U21 Ligi 1",
            "shortName": "Turk U21 L1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "156315",
            "name": "Turkey U21 Super League",
            "shortName": "Turk U21 SL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "166316",
            "name": "International Friendly",
            "shortName": "INT FRL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "176317",
            "name": "Indian Super League",
            "shortName": "ISL",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "186318",
            "name": "CONCACAF Women",
            "shortName": "CNCF WGC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "107311",
            "name": "SAFF Women’s Championship",
            "shortName": "South A G",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "117312",
            "name": "Women C. American and Caribbean Games",
            "shortName": "CNCF WCAC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "127313",
            "name": "OFC President's Cup",
            "shortName": "OFC PC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "137314",
            "name": "Brazil Campeonato Paulista B",
            "shortName": "BRA SPB",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "147315",
            "name": "Indian U19",
            "shortName": "Indian U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "157316",
            "name": "Pakistan Premier League",
            "shortName": "PPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "167317",
            "name": "Senegal Premier League",
            "shortName": "SEN D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "177318",
            "name": "Italian Women Cup",
            "shortName": "IW Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "187319",
            "name": "Liga de Elite",
            "shortName": "MAC D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "297310",
            "name": "Vietnam Championship U19",
            "shortName": "VIE U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "108312",
            "name": "Sudamericana de Beach Soccer",
            "shortName": "CSBS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "118313",
            "name": "Brazil Campeonato Paulista C",
            "shortName": "BRA SPC2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "128314",
            "name": "Australian cloth",
            "shortName": "AUS BPLD1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "138315",
            "name": "Uzbekistan Super Cup",
            "shortName": "Uzbekistan Su",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "148316",
            "name": "Bulgaria U21",
            "shortName": "BUL U21",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "158317",
            "name": "AFC U23 Asian Cup",
            "shortName": "AFC U23",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "178319",
            "name": "Woman's All Africa Soccer",
            "shortName": "AAS WNC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "288310",
            "name": "Olympic Games（Woman）",
            "shortName": "Olympic（W）",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "298311",
            "name": "Brazil Campeonato Paulista Youth",
            "shortName": "BRA CPY",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "109313",
            "name": "Indonesia Champions Cup",
            "shortName": "IDN CC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "119314",
            "name": "Brazil Paulista Women's League",
            "shortName": "BRA SPWL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "139316",
            "name": "Ghana Premier League",
            "shortName": "GHA D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "149317",
            "name": "Vietnam Second Division",
            "shortName": "VIE D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "159318",
            "name": "Australia Victorian Women's Cup",
            "shortName": "AUS VWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "169319",
            "name": "Iceland U19 League",
            "shortName": "ICE U19L",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "279310",
            "name": "Australia U20",
            "shortName": "WAUS U20",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "289311",
            "name": "Ecuador Campeonato Serie B",
            "shortName": "ECU D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "299312",
            "name": "WeiFang Women's Cup",
            "shortName": "WFW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "100415",
            "name": "WAUS WD1",
            "shortName": "WAUS WD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "120417",
            "name": "FYR Macedonia Super Cup",
            "shortName": "MKD SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "130418",
            "name": "WAFF U16 Championship",
            "shortName": "WAFF-U16",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "140419",
            "name": "South Asian Championship U19",
            "shortName": "SAFF U18",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "150410",
            "name": "Belgium Women's Premier League",
            "shortName": "BPL (W)",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "160411",
            "name": "Brasil Women's Cup",
            "shortName": "B W Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "170412",
            "name": "Norway Division 4",
            "shortName": "NOR D4",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "180413",
            "name": "WAFF U23 Championship",
            "shortName": "WAFF U23",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "190414",
            "name": "Jamaica Premier League",
            "shortName": "JAM D1",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "111417",
            "name": "India Goa Professional League",
            "shortName": "IND GoaPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "121418",
            "name": "Germany Youth U17 League",
            "shortName": "GER U17",
            "type": 1,
            "subLeagueName": "South"
        },
        {
            "leagueId": "131419",
            "name": "Spanish Segunda Division B",
            "shortName": "SPA D3",
            "type": 1,
            "subLeagueName": "Promotion Finals"
        },
        {
            "leagueId": "141410",
            "name": "France  Youth U19 League",
            "shortName": "FRA U19",
            "type": 1,
            "subLeagueName": "Playoffs"
        },
        {
            "leagueId": "151411",
            "name": "Germany Youth U19 League",
            "shortName": "GER U19",
            "type": 1,
            "subLeagueName": "Playoff Final"
        },
        {
            "leagueId": "161412",
            "name": "Germany Regionalliga",
            "shortName": "GER Reg",
            "type": 1,
            "subLeagueName": "Bavaria"
        },
        {
            "leagueId": "171413",
            "name": "Finland - Kakkonen Lohko",
            "shortName": "FIN D3 A",
            "type": 1,
            "subLeagueName": "Group B"
        },
        {
            "leagueId": "181414",
            "name": "Belgium Third Division",
            "shortName": "BEL D3",
            "type": 1,
            "subLeagueName": "Promotion Finals"
        },
        {
            "leagueId": "191415",
            "name": "Portugal Champions NACIONAL Juniores B",
            "shortName": "POR JB",
            "type": 1,
            "subLeagueName": "Group D"
        },
        {
            "leagueId": "102417",
            "name": "Chinese Women’s Super Cup",
            "shortName": "CWSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "112418",
            "name": "French Championnat Amateur",
            "shortName": "FRA D4",
            "type": 1,
            "subLeagueName": "Group A"
        },
        {
            "leagueId": "132410",
            "name": "Romania - Liga 2 Seria",
            "shortName": "ROM D2",
            "type": 1,
            "subLeagueName": "Promotion Group"
        },
        {
            "leagueId": "142411",
            "name": "Greece Divison C",
            "shortName": "GRE D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "152412",
            "name": "Switzerland - 2.Liga",
            "shortName": "SUI D2",
            "type": 1,
            "subLeagueName": "Group 1"
        },
        {
            "leagueId": "162413",
            "name": "Austrian 3.Liga",
            "shortName": "AUS D3",
            "type": 1,
            "subLeagueName": "East"
        },
        {
            "leagueId": "172414",
            "name": "Denmark - 2.Liga",
            "shortName": "DEN D2",
            "type": 1,
            "subLeagueName": "Group A"
        },
        {
            "leagueId": "182415",
            "name": "Norway 2.Liga",
            "shortName": "NOR D2",
            "type": 1,
            "subLeagueName": "Group B"
        },
        {
            "leagueId": "192416",
            "name": "Portugal Champions NACIONAL Juniores A 1",
            "shortName": "PORJA1",
            "type": 1,
            "subLeagueName": "Championship"
        },
        {
            "leagueId": "103418",
            "name": "Swden Women Divi.1",
            "shortName": "SW D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "113419",
            "name": "Turkiye Lig3",
            "shortName": "TUR D3",
            "type": 1,
            "subLeagueName": "LiG B"
        },
        {
            "leagueId": "123410",
            "name": "Turkey 3. Ligi B",
            "shortName": "TUR 3B",
            "type": 1,
            "subLeagueName": "Playoffs Finals"
        },
        {
            "leagueId": "133411",
            "name": "Russia Division 2",
            "shortName": "RUS D2",
            "type": 1,
            "subLeagueName": "West B"
        },
        {
            "leagueId": "143412",
            "name": "United Arab Emirates U21",
            "shortName": "UAE U21",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "163414",
            "name": "Sweden Div 3 Mellersta",
            "shortName": "SWE D3",
            "type": 1,
            "subLeagueName": "South Gotaland"
        },
        {
            "leagueId": "173415",
            "name": "Estonia Winter Tournament",
            "shortName": "Est WT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "183416",
            "name": "Iceland Reykjavik Women's Tournament",
            "shortName": "REWT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "193417",
            "name": "Iceland Championship B",
            "shortName": "ICE CH B",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "104419",
            "name": "Indian U18",
            "shortName": "Indian U18",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "114410",
            "name": "Brazil Primeira Liga Cup",
            "shortName": "BLP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "124411",
            "name": "Challenge DE French Feminin",
            "shortName": "FRA FCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "134412",
            "name": "Myanmar Professional League",
            "shortName": "MYA D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "144413",
            "name": "Women South Asian Games",
            "shortName": "AFC WSAG",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "154414",
            "name": "Brazil Mato-grossense Division 1",
            "shortName": "BRA MT",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "164415",
            "name": "Olympics Europe Quali-Woman",
            "shortName": "WOFTQ",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "174416",
            "name": "AFC AFCC",
            "shortName": "AFC AFCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "184417",
            "name": "Brazil Copa Verde",
            "shortName": "BRA CV",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "194418",
            "name": "BRA SE",
            "shortName": "BRA SE",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "105410",
            "name": "TAS Premier League",
            "shortName": "TSA TPL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "115411",
            "name": "Zimbabwe Premier",
            "shortName": "ZIM LEG",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "125412",
            "name": "Brazil Brasiliense DF Division 1",
            "shortName": "BRA DF",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "135413",
            "name": "Australia Northern NSW Premier League",
            "shortName": "NSW-N  TPL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "145414",
            "name": "Australia Queensland State Women's Premier League",
            "shortName": "AUS WQSL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "155415",
            "name": "Brazilian Futsal League",
            "shortName": "BRA FutL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "165416",
            "name": "Kenya Premier League",
            "shortName": "Ken D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "175417",
            "name": "USA National Premier Soccer League",
            "shortName": "USA NPSL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "185418",
            "name": "Australia Brisbane Premier League Reserves",
            "shortName": "AUS BPLR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "106411",
            "name": "Indonesia Soccer Championship",
            "shortName": "IDN SC",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "116412",
            "name": "Argentina group C Tebolidun League Manchester",
            "shortName": "ACT  M",
            "type": 1,
            "subLeagueName": "Autumn"
        },
        {
            "leagueId": "126413",
            "name": "Argentina Ding Group Tebolidun League Manchester",
            "shortName": "ADT M",
            "type": 1,
            "subLeagueName": "Apertura"
        },
        {
            "leagueId": "146415",
            "name": "Cameroon Elite One",
            "shortName": "CAE D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "156416",
            "name": "Ethiopia Premier League",
            "shortName": "ETH PR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "166417",
            "name": "Rwanda National League",
            "shortName": "RWA D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "176418",
            "name": "Bhutan Thimphu League",
            "shortName": "BHU TL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "186419",
            "name": "Poland Regional Cup",
            "shortName": "PR CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "296410",
            "name": "Trofeo Dossena Cup",
            "shortName": "TDC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "107412",
            "name": "Australia New South Wales NPL Women",
            "shortName": "FFSA WPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "117413",
            "name": "Angola Girabola League",
            "shortName": "AGB LE",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "127414",
            "name": "FFSA SLR",
            "shortName": "FFSA SLR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "137415",
            "name": "Uruguay Segunda",
            "shortName": "URU D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "147416",
            "name": "Australia Women Brisbane Premier League",
            "shortName": "AUS WBPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "157417",
            "name": "Finland Championship U20",
            "shortName": "FIN CU20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "167418",
            "name": "Cameroon Elite two",
            "shortName": "CAE D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "177419",
            "name": "USA Women Premier League",
            "shortName": "USA WPSL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "287410",
            "name": "Kazakhstan Women’s Super League",
            "shortName": "KWSL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "297411",
            "name": "Ivory Coast Premier Division",
            "shortName": "ICPD D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "108413",
            "name": "Rwanda cup",
            "shortName": "RWA CP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "118414",
            "name": "Northern Ireland Women's Super",
            "shortName": "NIR WD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "128415",
            "name": "Peru B League",
            "shortName": "PER D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "138416",
            "name": "Japan Futsal League",
            "shortName": "JAP FutL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "148417",
            "name": "Bolivia Copa Cine Center",
            "shortName": "BCCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "158418",
            "name": "South East Asia University Games",
            "shortName": "SEAU",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "168419",
            "name": "Australia Brisbane Woman Cup",
            "shortName": "Aus BWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "278410",
            "name": "Sudanese Premier League",
            "shortName": "SUD PR",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "288411",
            "name": "Iran Super Cup",
            "shortName": "ISC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "298412",
            "name": "COTIF Tournament",
            "shortName": "COTIF",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "109414",
            "name": "Calcutta Football League",
            "shortName": "CFL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "119415",
            "name": "India Sikkim S-League",
            "shortName": "ISS",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "129416",
            "name": "Southern Sweden",
            "shortName": "SOU SW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "149418",
            "name": "Panama Liga Nacional de Ascenso",
            "shortName": "BRA LNA",
            "type": 1,
            "subLeagueName": "Autumn"
        },
        {
            "leagueId": "159419",
            "name": "Northern German state premier league - bayern",
            "shortName": "GER Bbe",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "269410",
            "name": "Mali Cup",
            "shortName": "Mali C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "279411",
            "name": "Finland Kolmonen",
            "shortName": "Finland K",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "289412",
            "name": "Japan Challenge League Women",
            "shortName": "JWCLW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "299413",
            "name": "Central Premier League",
            "shortName": "CPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "100516",
            "name": "Thai Division 2 League",
            "shortName": "THA D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "110517",
            "name": "Venezuela Segunda Division",
            "shortName": "VEN D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "120518",
            "name": "Finland Women League 1",
            "shortName": "FIN WD2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "130519",
            "name": "Latvia 2 LIga",
            "shortName": "LAT L2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "140510",
            "name": "Ivory Coast Cup",
            "shortName": "LCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "150511",
            "name": "Estonia Meistriliiga",
            "shortName": "ESM",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "160512",
            "name": "Finland Championship U20",
            "shortName": "FIN U20",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "170513",
            "name": "Kenya Cup",
            "shortName": "Kenya C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "180514",
            "name": "El Salvador U20",
            "shortName": "SLV U20",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "190515",
            "name": "Queensland U20 League",
            "shortName": "AQ U20 L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "101517",
            "name": "Australia Victoria State League 1",
            "shortName": "AVSL1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "111518",
            "name": "Northern NSW U22 League",
            "shortName": "AB U22 L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "121519",
            "name": "Australia Capital Territory U20 League",
            "shortName": "ACT U20 L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "131510",
            "name": "Australia Victoria State League 1 Reserves",
            "shortName": "AVS LR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "141511",
            "name": "Austria Landesliga",
            "shortName": "AUS L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "151512",
            "name": "Brazil Paulista Serie B",
            "shortName": "BRP PS D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "161513",
            "name": "Australia New South Wales League 2",
            "shortName": "ANSW L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "171514",
            "name": "Japan Regional League",
            "shortName": "JAP RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "181515",
            "name": "Finland Ykkonen Women",
            "shortName": "FIN YKW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "191516",
            "name": "Ecuador U19 League",
            "shortName": "ECU U19 L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "102518",
            "name": "Montenegro Division 2",
            "shortName": "MNE D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "112519",
            "name": "New Zealand Mainland Premier League",
            "shortName": "NZM SL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "122510",
            "name": "Northern New Zealand League",
            "shortName": "NOR NZL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "132511",
            "name": "Malawi Premier League",
            "shortName": "MPRE L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "142512",
            "name": "Belgian First Amateur Division",
            "shortName": "BEL FAD",
            "type": 1,
            "subLeagueName": "Relegation Playoffs 2"
        },
        {
            "leagueId": "152513",
            "name": "New Zealand Northern Premier Reserves",
            "shortName": "NOR NZL (R.)",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "162514",
            "name": "New Zealand South Premier League",
            "shortName": "FFSA NZL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "172515",
            "name": "Bangladesh Premier League",
            "shortName": "BGD D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "182516",
            "name": "Dominican Republic Liga",
            "shortName": "DOM D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "192517",
            "name": "Argentina Santa Fe Cup",
            "shortName": "Santa Fe Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "103519",
            "name": "Schleswig Holstein Liga",
            "shortName": "GER SHL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "113510",
            "name": "Paraguay reserve team league",
            "shortName": "PAR RT",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "133512",
            "name": "Mali Premiere Division",
            "shortName": "Mal PD",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "143513",
            "name": "Poland Division 4",
            "shortName": "Pol D4",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "153514",
            "name": "El Salvador Reserves League",
            "shortName": "SLV Rl",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "163515",
            "name": "Zambia Super League",
            "shortName": "Zam SL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "173516",
            "name": "Sri Lanka Champions League",
            "shortName": "SLL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "183517",
            "name": "Kampuchea Super League",
            "shortName": "KAM SL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "193518",
            "name": "The women's league of Argentina",
            "shortName": "ARGW D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "114511",
            "name": "Swedish Ding League",
            "shortName": "SWE DL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "124512",
            "name": "South African University League",
            "shortName": "SAU L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "134513",
            "name": "Peru Reserves League",
            "shortName": "PRL RT",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "144514",
            "name": "Singapore National Football League",
            "shortName": "SNFL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "154515",
            "name": "Ireland U19 League",
            "shortName": "IRE U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "164516",
            "name": "Brazil Campeonato U19",
            "shortName": "BRA U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "174517",
            "name": "Serbia U19 League",
            "shortName": "SER U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "184518",
            "name": "Palestine Cup",
            "shortName": "Palestine C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "194519",
            "name": "Switzerland 1.Liga Promotion",
            "shortName": "SUI D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "105511",
            "name": "Uruguay U19 League",
            "shortName": "URU U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "115512",
            "name": "Australia Northern NSW Division 1",
            "shortName": "AUS NSW PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "125513",
            "name": "Iceland 4 Deild",
            "shortName": "LCE D4",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "135514",
            "name": "Iceland 3 Deild",
            "shortName": "LCE D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "155516",
            "name": "Paraguay U20 League",
            "shortName": "PAR U20",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "165517",
            "name": "Australia Victoria State League",
            "shortName": "AUS VS L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "175518",
            "name": "Czech Group D League",
            "shortName": "CZE DFL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "185519",
            "name": "Germany Oberliga NOFV",
            "shortName": "GER OBW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "295510",
            "name": "Germany Oberliga Niedersachsen - Full Time Result",
            "shortName": "GON",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "116513",
            "name": "Catalonia Cup",
            "shortName": "Catalonia C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "126514",
            "name": "Chile Primera D",
            "shortName": "CHI D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "136515",
            "name": "Costa Rica 2.Liga",
            "shortName": "CRC D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "146516",
            "name": "Philippines UFL",
            "shortName": "PH UFL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "156517",
            "name": "Republic of Ireland National League Women",
            "shortName": "Irish WNU",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "166518",
            "name": "Guatemala D2",
            "shortName": "GUA D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "176519",
            "name": "New Zealand NRFL Premier Division Women",
            "shortName": "NZDW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "286510",
            "name": "Panama Reserve League",
            "shortName": "PRL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "107513",
            "name": "Hungary NB III",
            "shortName": "HUN D3E",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "117514",
            "name": "Brunei Super League",
            "shortName": "BSL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "137516",
            "name": "Bosnia erzegovina 1st League",
            "shortName": "Bos HD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "147517",
            "name": "Presidents Cup U17",
            "shortName": "PRE U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "167519",
            "name": "Southern League Cup",
            "shortName": "SOU PL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "277510",
            "name": "Cyprus Super Cup",
            "shortName": "CYP SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "287511",
            "name": "Malaysia FAM League",
            "shortName": "MAS FAM",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "297512",
            "name": "India Shillong Premier League",
            "shortName": "IND SPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "108514",
            "name": "Goa Cup",
            "shortName": "Goa Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "118515",
            "name": "SBS CUP",
            "shortName": "SBS CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "128516",
            "name": "Hiroshima International Youth Tournament",
            "shortName": "HIYT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "138517",
            "name": "England U23 Premier League",
            "shortName": "ENG PU23",
            "type": 1,
            "subLeagueName": "Playoffs Final"
        },
        {
            "leagueId": "148518",
            "name": "Denmark Jyllandsserien P1",
            "shortName": "DEN P1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "158519",
            "name": "The German oberliga Westfalen",
            "shortName": "GER OB",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "268510",
            "name": "Nicaragua Apertura league",
            "shortName": "NIC D1",
            "type": 1,
            "subLeagueName": "Autumn"
        },
        {
            "leagueId": "278511",
            "name": "Holland Derde Divisie",
            "shortName": "NLD D4",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "288512",
            "name": "Singapore Prime League",
            "shortName": "SGP RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "298513",
            "name": "Norway Division 1 Women",
            "shortName": "NOR D1 W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "109515",
            "name": "TAS Premier Championship",
            "shortName": "TSA PC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "119516",
            "name": "Kenya Super League U20",
            "shortName": "Ken U20",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "129517",
            "name": "Holland Ligue 3",
            "shortName": "HOL D3",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "139518",
            "name": "Uganda Premier League",
            "shortName": "UPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "149519",
            "name": "Argentina Torneo B",
            "shortName": "ARG TB",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "259510",
            "name": "Trinidad and Tobago Super League",
            "shortName": "TRI D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "269511",
            "name": "Portugal Champions NACIONAL U19",
            "shortName": "POR CN U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "279512",
            "name": "Holland Reserve League",
            "shortName": "HOL RE",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "299514",
            "name": "England U23 1.Liga",
            "shortName": "ENG U23 D1",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "100617",
            "name": "Iceland U19 Women League",
            "shortName": "ICE U19W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "120619",
            "name": "Brazil Rio cup",
            "shortName": "BRA RC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "130610",
            "name": "Denmark Fynsserien",
            "shortName": "DEN F",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "140611",
            "name": "Serbia League Women",
            "shortName": "SER L W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "150612",
            "name": "Northern Ireland Cup Women",
            "shortName": "NIR CUP(W)",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "160613",
            "name": "Northern Ireland Reserve League",
            "shortName": "NIR Rl",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "170614",
            "name": "Russia Division 3",
            "shortName": "RUS D3",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "180615",
            "name": "NNL",
            "shortName": "NNL",
            "type": 1,
            "subLeagueName": "Playoffs"
        },
        {
            "leagueId": "190616",
            "name": "Mexico Liga TDP",
            "shortName": "MEX LT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "101618",
            "name": "Australia Brisbane Capital League 2",
            "shortName": "AUS CGP B",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "111619",
            "name": "Denmark - 4.Liga",
            "shortName": "DEN D4",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "121610",
            "name": "Croatia 2.HNL",
            "shortName": "CRO D2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "141612",
            "name": "Brazil Baiano League",
            "shortName": "BRA BL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "151613",
            "name": "Belgium Reserve 1 League",
            "shortName": "BEL RL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "161614",
            "name": "Vietnam Women Championship",
            "shortName": "WIE WC",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "171615",
            "name": "England U23 League Cup",
            "shortName": "ENG U23LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "181616",
            "name": "India MFA Super Cup",
            "shortName": "Ind SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "191617",
            "name": "Brazil Super Copa Gaucho",
            "shortName": "Brazil SUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "102619",
            "name": "Ireland Leinster Senior League",
            "shortName": "Ire LSL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "112610",
            "name": "Latvia Womens League",
            "shortName": "Lat WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "132612",
            "name": "Tanzania Ligue 1",
            "shortName": "Tanzania PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "142613",
            "name": "Cameroon Cup",
            "shortName": "CAE CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "152614",
            "name": "AFC Cup qualifiers",
            "shortName": "Asian Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "162615",
            "name": "Fiji cup",
            "shortName": "Fiji cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "172616",
            "name": "Croatia U19",
            "shortName": "CRSK U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "182617",
            "name": "Al and Lee Reserve League",
            "shortName": "AI LRL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "192618",
            "name": "Australia U20 League",
            "shortName": "AUS U20 L",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "103610",
            "name": "India Durand Cup",
            "shortName": "Id DCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "123612",
            "name": "England EFL Trophy",
            "shortName": "EFL cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "133613",
            "name": "Ukraine Women Division",
            "shortName": "UKR D1 W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "143614",
            "name": "Argentina Reserve League",
            "shortName": "ARG RESL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "153615",
            "name": "Uruguay Reserve League",
            "shortName": "URU RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "173617",
            "name": "Norway Division 2 Women",
            "shortName": "NOR D2 W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "183618",
            "name": "Under 19 Gulf Cup of Nations",
            "shortName": "GF C U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "193619",
            "name": "Romania U19 League",
            "shortName": "ROM U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "104611",
            "name": "Slovenia women's League",
            "shortName": "SLO WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "114612",
            "name": "Romania - Liga 3 Seria",
            "shortName": "ROM D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "124613",
            "name": "Indonesia Super League U21",
            "shortName": "IND SL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "134614",
            "name": "Australia SA Cup Women",
            "shortName": "AUS SA CUP(W)",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "144615",
            "name": "Spanish Ladies Premier League B",
            "shortName": "SPA WD2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "154616",
            "name": "France CFA 2",
            "shortName": "France CFA 2",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "164617",
            "name": "Hungary U19 2nd Division",
            "shortName": "HUN U19B",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "174618",
            "name": "National Primera Division Western Australia",
            "shortName": "WAUS D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "184619",
            "name": "Brazil Campeonato Baiano 2",
            "shortName": "BRA CB2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "294610",
            "name": "India Goa U20",
            "shortName": "IND GoaU20",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "105612",
            "name": "Italy Serie D",
            "shortName": "ITA S4",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "115613",
            "name": "Scotland Development League",
            "shortName": "SCO DU20",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "125614",
            "name": "Belarus Division 3",
            "shortName": "BLR D3",
            "type": 1,
            "subLeagueName": "Relegation Playoffs"
        },
        {
            "leagueId": "135615",
            "name": "Columbia U19 League",
            "shortName": "COL U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "145616",
            "name": "Austria Amateur cup",
            "shortName": "AUS AC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "155617",
            "name": "Azerbaijan Division 2",
            "shortName": "AZE D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "165618",
            "name": "Austria U18",
            "shortName": "AUT U18",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "175619",
            "name": "North Macedonia League Women",
            "shortName": "MAC L W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "285610",
            "name": "Ukraine Division 3",
            "shortName": "UKR D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "295611",
            "name": "Paralympic Games Football",
            "shortName": "PGF",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "106613",
            "name": "Uruguay Torneo Preparacion",
            "shortName": "USA W TP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "116614",
            "name": "Venezuela U20 League",
            "shortName": "VEN U20 L",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "126615",
            "name": "San Marino League",
            "shortName": "SAN L",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "136616",
            "name": "Hong Kong 2nd Division",
            "shortName": "HK D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "146617",
            "name": "New Zealand Cup",
            "shortName": "NZC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "156618",
            "name": "Spain Segunda Women",
            "shortName": "SPA WD2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "166619",
            "name": "African Women's Challenge Cup",
            "shortName": "CAF WCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "276610",
            "name": "Brasil Cup women",
            "shortName": "BRA WCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "286611",
            "name": "Northern League Challenge Cup",
            "shortName": "ENG NCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "296612",
            "name": "Argentine Torneo A",
            "shortName": "ARG D3FA",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "107614",
            "name": "Swiss League U18",
            "shortName": "S U18 L",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "117615",
            "name": "Qatar Reserve League",
            "shortName": "QAT RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "127616",
            "name": "Australian National Super League",
            "shortName": "AUS NPL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "147618",
            "name": "Holland Youth Eredivisie",
            "shortName": "HY U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "157619",
            "name": "Fiji National League",
            "shortName": "FIJ NL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "267610",
            "name": "Slovenia Cup Women",
            "shortName": "SCW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "277611",
            "name": "Italy Serie D Cup",
            "shortName": "ITA S4 CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "287612",
            "name": "Azerbaijan Reserve League",
            "shortName": "AZE RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "297613",
            "name": "Asian Beach Games-Soccer",
            "shortName": "ASI BGS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "108615",
            "name": "Belarus Reserve League",
            "shortName": "BLR RL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "118616",
            "name": "Algeria U21-2 Youth League",
            "shortName": "ALG U21-2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "128617",
            "name": "India Mizoram Premier League",
            "shortName": "IND MizPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "138618",
            "name": "Gibraltar Premier Division",
            "shortName": "GIB PD",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "148619",
            "name": "Trinidad and Tobago Pro League",
            "shortName": "TRI PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "258610",
            "name": "Israel C League",
            "shortName": "ISR CL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "268611",
            "name": "Romania Liga 1 Women",
            "shortName": "R WSL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "278612",
            "name": "Southern League Cup",
            "shortName": "SOU LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "288613",
            "name": "Vietnam U21 League",
            "shortName": "VIE U21 L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "298614",
            "name": "Serbia Srpska Liga",
            "shortName": "SER SL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "109616",
            "name": "Beijing Tianjin Hebei champion cup",
            "shortName": "BTH Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "119617",
            "name": "BRICS Cup",
            "shortName": "BRICS Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "129618",
            "name": "Azerbaijan U19 League",
            "shortName": "AZE U19L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "139619",
            "name": "Brazil Campeonato Amazonense",
            "shortName": "BRA CA",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "259611",
            "name": "Portugal Campeonato Nacional",
            "shortName": "POR D3",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "269612",
            "name": "Sweden Women U19 League",
            "shortName": "SW WU19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "279613",
            "name": "England Ryman Cup",
            "shortName": "ENG R Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "289614",
            "name": "The Spanish League U18",
            "shortName": "SPA LU18",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "299615",
            "name": "Hong Kong  Elite Cup",
            "shortName": "HKEC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "110719",
            "name": "Poland Cup Women",
            "shortName": "PolCW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "120710",
            "name": "Sub foot cup",
            "shortName": "Sub foot cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "130711",
            "name": "FIFA U-20 Women World Cup",
            "shortName": "FIFAWYC（W）",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "140712",
            "name": "Thailand U19 League",
            "shortName": "THA U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "150713",
            "name": "Haiti Division 1",
            "shortName": "HTD 1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "160714",
            "name": "UAE Division 2 Group A",
            "shortName": "UAE D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "170715",
            "name": "France U19 League Cup",
            "shortName": "FRAC U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "180716",
            "name": "Belgium Reserve Cup",
            "shortName": "BEL U21C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "190717",
            "name": "India Mumbai Elite League",
            "shortName": "IME L1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "101719",
            "name": "Belgium Youth League",
            "shortName": "BEL U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "111710",
            "name": "UEFA  Super League Cup U23",
            "shortName": "UEFASL U23",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "121711",
            "name": "Lebanese Premier 2",
            "shortName": "LBN D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "131712",
            "name": "India Mumbai elite league",
            "shortName": "Indian Elite",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "151714",
            "name": "Romania women Cup",
            "shortName": "WROM C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "161715",
            "name": "Sweden U19 League Cup",
            "shortName": "SWEC U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "171716",
            "name": "San Marino cup",
            "shortName": "SMA CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "181717",
            "name": "Kuwait Youth League",
            "shortName": "LUW YL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "191718",
            "name": "Brazil Copa RS U20",
            "shortName": "Copa RS U20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "112711",
            "name": "Peru Cup",
            "shortName": "Peru cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "122712",
            "name": "COSAFA Cup U20",
            "shortName": "CAF CoC20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "132713",
            "name": "New Zealand Youth League",
            "shortName": "NZFC U20",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "142714",
            "name": "India Santosh Trophy",
            "shortName": "Ind ST",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "152715",
            "name": "Inter annual Cup Super tournament",
            "shortName": "CSL NYCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "162716",
            "name": "China Cup",
            "shortName": "China Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "172717",
            "name": "Italy amateur cup",
            "shortName": "Ita Atr Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "182718",
            "name": "Israel Youth Cup",
            "shortName": "IY Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "192719",
            "name": "France Ligue 5",
            "shortName": "FRA D5",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "103711",
            "name": "Latvia winter cup",
            "shortName": "LAT VWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "113712",
            "name": "Japan New Year Cup",
            "shortName": "JPN NYC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "123713",
            "name": "Jamaica Cup",
            "shortName": "JAM C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "133714",
            "name": "India Bangalore A Division",
            "shortName": "IND BLR D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "143715",
            "name": "Greece U19",
            "shortName": "Greece U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "153716",
            "name": "England County cup",
            "shortName": "ENG C C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "163717",
            "name": "Senegal Premier League cup",
            "shortName": "SEN C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "173718",
            "name": "Senior Cup",
            "shortName": "Senior C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "183719",
            "name": "Curacao League",
            "shortName": "Cur L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "293710",
            "name": "Russian FNL cup",
            "shortName": "RUS FC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "104712",
            "name": "Carolina Challenge Cup",
            "shortName": "Car Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "114713",
            "name": "Burundi League",
            "shortName": "BI PL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "124714",
            "name": "Brazil Mineiluo group B League",
            "shortName": "BRB MG",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "134715",
            "name": "India I-League 2nd Division",
            "shortName": "IND D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "144716",
            "name": "India Senior League",
            "shortName": "India SL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "164718",
            "name": "Cuban Championship",
            "shortName": "Cuban C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "174719",
            "name": "El Salvador Cup",
            "shortName": "El Salvador C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "284710",
            "name": "Northern NSW U20 League",
            "shortName": "AB U20 L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "294711",
            "name": "Australia Gold Coast Premier League",
            "shortName": "Aus GL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "105713",
            "name": "Kosovo Superliga",
            "shortName": "Kos L",
            "type": 1,
            "subLeagueName": "Playoffs"
        },
        {
            "leagueId": "115714",
            "name": "New Zealand Mainland Premier Reserves",
            "shortName": "New ZLR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "125715",
            "name": "Belize Premier League",
            "shortName": "Belize PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "135716",
            "name": "Columbia women's League",
            "shortName": "Columbia W L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "145717",
            "name": "Macedonia Cup Women",
            "shortName": "Macedonia C W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "155718",
            "name": "Uganda Division 2",
            "shortName": "Uganda D 2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "165719",
            "name": "Switzerland Division 1 Women",
            "shortName": "Swi D1W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "275710",
            "name": "Wales League Division 2",
            "shortName": "WLD2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "285711",
            "name": "Ghana Division 1",
            "shortName": "Ghana D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "295712",
            "name": "Brazil Debbie Shapiro",
            "shortName": "Brazil D L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "106714",
            "name": "Brazil Serie D",
            "shortName": "Bra SD",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "116715",
            "name": "Brazil L",
            "shortName": "Brazil L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "126716",
            "name": "Brazil Campeonato Gaucho 2",
            "shortName": "Brazil DDL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "136717",
            "name": "Brazil women's League",
            "shortName": "Brazil W  L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "156719",
            "name": "Georgia U19 League",
            "shortName": "Georgia U19 L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "266710",
            "name": "Chinese Taipei Intercity League",
            "shortName": "Chinese T L",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "276711",
            "name": "Northern Ireland  League",
            "shortName": "NIR D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "286712",
            "name": "Croatia U19 League",
            "shortName": "Croatia U19 L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "296713",
            "name": "Uganda Cup",
            "shortName": "Uganda C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "107715",
            "name": "Maldives Premier League",
            "shortName": "Maldives P L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "117716",
            "name": "Macau 2nd Division",
            "shortName": "Macau  D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "127717",
            "name": "Australia Tasmania Super League Women",
            "shortName": "Australia T S L",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "137718",
            "name": "Portugal Women Cup",
            "shortName": "Portugal Cup（W）",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "147719",
            "name": "Barbados Premier League",
            "shortName": "Barbados P L",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "257710",
            "name": "Bolivia Nacional B",
            "shortName": "Bolivia N B",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "267711",
            "name": "Germany Bundesliga II Women",
            "shortName": "GER WD2",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "277712",
            "name": "Moldova Cup Women",
            "shortName": "Moldova W C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "287713",
            "name": "Honduras Cup",
            "shortName": "Honduras C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "297714",
            "name": "Philippines UAAP Women",
            "shortName": "Philippines L",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "108716",
            "name": "Australia Gold Coast Reserves",
            "shortName": "AGC R",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "118717",
            "name": "Australia Victoria NPL2 U20 League",
            "shortName": "Aus N2U20",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "128718",
            "name": "Germany U19 Cup",
            "shortName": "Germany U19 C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "138719",
            "name": "Gibraltar Cup",
            "shortName": "GIB Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "248710",
            "name": "Australia Victoria State League 1 Women",
            "shortName": "Australia Victoria LW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "258711",
            "name": "Cyprus Cup Women",
            "shortName": "Cyprus C W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "268712",
            "name": "Greece Super League Women",
            "shortName": "GSLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "278713",
            "name": "Sri Lanka FA Cup",
            "shortName": "Sri Lanka  C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "288714",
            "name": "Leinster Senior Cup",
            "shortName": "Leinster S C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "298715",
            "name": "Jordan League Women",
            "shortName": "Jordan L W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "109717",
            "name": "Ecuador Reserve League",
            "shortName": "ECR R L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "119718",
            "name": "Bangladesh Federation Cup",
            "shortName": "BDFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "129719",
            "name": "Asian Football Association U20 Futsal Championship",
            "shortName": "Asian F",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "239710",
            "name": "Australia Brisbane Capital League 1 Reserves",
            "shortName": "ABC L R",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "249711",
            "name": "Macedonia women's League",
            "shortName": "Macedonia W L",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "259712",
            "name": "Japanese women's Cup 2",
            "shortName": "Japanese W C 2",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "269713",
            "name": "Italy Youth Championship Cup",
            "shortName": "Italy Youth C C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "279714",
            "name": "Barbados Challenge Cup",
            "shortName": "Barbados C C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "289715",
            "name": "Gabon Championnat D1",
            "shortName": "Gabon C D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "299716",
            "name": "Brazil Paul U17",
            "shortName": "BP U17",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "100819",
            "name": "Ghana FA Cup",
            "shortName": "Ghana FA C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "110810",
            "name": "Venezuela Primera Women",
            "shortName": "VEN PW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "120811",
            "name": "Ukraine women League",
            "shortName": "Ukraine L W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "130812",
            "name": "Australia Gold Coast Cup",
            "shortName": "Australia G C C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "140813",
            "name": "Papar 2",
            "shortName": "Papar 2",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "150814",
            "name": "Ethiopia Cup",
            "shortName": "Ethiopia C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "160815",
            "name": "Youth Cup",
            "shortName": "BQC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "170816",
            "name": "Mexico Champion of Champions",
            "shortName": "MEX CC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "180817",
            "name": "CONCACAF League",
            "shortName": "CNCF CLG",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "190818",
            "name": "Sudan Cup",
            "shortName": "Sudan Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "101810",
            "name": "Lithuania A Lyga Women",
            "shortName": "LIT ALW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "111811",
            "name": "China National Games - U20 Football",
            "shortName": "CSGU20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "121812",
            "name": "COSAFA Women Cup",
            "shortName": "WCOS CW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "131813",
            "name": "Premier League International Cup",
            "shortName": "PLI CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "141814",
            "name": "Czech women's Cup",
            "shortName": "Cz WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "151815",
            "name": "Baba U17 cup",
            "shortName": "Baba U17 cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "161816",
            "name": "Indoor foot invitational tournament",
            "shortName": "Fut IFI",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "171817",
            "name": "Mexico Liga MX Femenil",
            "shortName": "Mex MFW",
            "type": 1,
            "subLeagueName": "Apertura"
        },
        {
            "leagueId": "181818",
            "name": "Northern Ireland shield cup",
            "shortName": "NIR SHCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "102811",
            "name": "Spain Youth League",
            "shortName": "SPA LU19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "112812",
            "name": "Israel Super Cup",
            "shortName": "IS-CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "122813",
            "name": "Cambodia Cup",
            "shortName": "CB-CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "132814",
            "name": "Gambia GFA League",
            "shortName": "GFA PR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "142815",
            "name": "Japan Universit y  Championship",
            "shortName": "J-U NCH",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "152816",
            "name": "Hong Kong Women Premier League",
            "shortName": "HK WPR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "162817",
            "name": "Cyprus Women Division 1",
            "shortName": "CYP WD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "172818",
            "name": "Antigua Barbuda Premier Division",
            "shortName": "AB PR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "182819",
            "name": "England Essex Senior League",
            "shortName": "ENG ES",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "292810",
            "name": "Greece Amateur Cup",
            "shortName": "Gre Atr Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "103812",
            "name": "Iran Div 2",
            "shortName": "IRN D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "113813",
            "name": "Portugal Champions NACIONAL Juniores A 2",
            "shortName": "PORJA2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "133815",
            "name": "Spanish Ladies Premier League C",
            "shortName": "SPA WD4",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "143816",
            "name": "Algeria Womens League",
            "shortName": "ALG WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "153817",
            "name": "Japan International Youth Football Cup",
            "shortName": "JIY-CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "163818",
            "name": "Thai Futsal",
            "shortName": "Thai Futsal",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "173819",
            "name": "Lebanon U19 League",
            "shortName": "LBN U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "283810",
            "name": "Japan University Championship Women",
            "shortName": "J-U NCH W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "293811",
            "name": "Northern Ireland Intermediate Cup",
            "shortName": "NIRI CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "104813",
            "name": "Thailand University League",
            "shortName": "THA UL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "114814",
            "name": "England County League",
            "shortName": "ENG Cl",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "124815",
            "name": "Hong Kong FA Cup Junior Division",
            "shortName": "HKFAJD CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "134816",
            "name": "Hong Kong Guangdong Woman's Cup",
            "shortName": "GDHKWCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "144817",
            "name": "Germany Winter Cup",
            "shortName": "GER WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "154818",
            "name": "Australia,Brisbane Silver Boot",
            "shortName": "AUS BSB",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "274810",
            "name": "Vietnam Youth Championship Qualifier",
            "shortName": "VIE QUY",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "284811",
            "name": "Pulau Sumatera CUP",
            "shortName": "PS CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "294812",
            "name": "Iceland Faxa Bay  Cup Women",
            "shortName": "ICE FBC W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "105814",
            "name": "Florida Cup",
            "shortName": "Florida Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "115815",
            "name": "Wales Premier League Women",
            "shortName": "WAL PR（W）",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "125816",
            "name": "Bangladesh Independence Cup",
            "shortName": "BDIC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "135817",
            "name": "Brazil Campeonato Matogrossense",
            "shortName": "BRA CMC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "145818",
            "name": "Iceland Pre-Season Cup",
            "shortName": "ICE PSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "155819",
            "name": "Tajikistan Cup",
            "shortName": "TAJ CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "265810",
            "name": "International Development's Cup",
            "shortName": "INT DCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "275811",
            "name": "Dubai Cup",
            "shortName": "D.C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "285812",
            "name": "Brazil Campeonato Maranhense",
            "shortName": "BRA CM",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "295813",
            "name": "Uruguay Super Cup",
            "shortName": "Uruguay SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "106815",
            "name": "Argentina Torneo C",
            "shortName": "ARG TC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "116816",
            "name": "Atlantic Ocean Cup",
            "shortName": "AOC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "126817",
            "name": "CFU Club Championship",
            "shortName": "CFU CC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "146819",
            "name": "UEFA Nations League",
            "shortName": "UEFA  NL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "256810",
            "name": "BTV cup",
            "shortName": "BTV cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "266811",
            "name": "Mauritania Division 1",
            "shortName": "MAU D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "286813",
            "name": "Australia Queensland State Leagues",
            "shortName": "QLD D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "296814",
            "name": "Iceland League Cup B",
            "shortName": "ICE LCB",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "107816",
            "name": "Republic of Ireland Amateur Cup",
            "shortName": "IRD AC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "117817",
            "name": "Republic of Ireland Collingwood Cup",
            "shortName": "IRE CC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "127818",
            "name": "Ireland,FAI Presidents Cup",
            "shortName": "Ire PLCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "137819",
            "name": "Namibia Premier League",
            "shortName": "NAM PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "247810",
            "name": "KTFF Super League",
            "shortName": "KTFF SL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "257811",
            "name": "Botswana Premier League",
            "shortName": "BOW PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "267812",
            "name": "Copa del Sol of the USA",
            "shortName": "USA CDS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "277813",
            "name": "Ukraine Women Winter Cup",
            "shortName": "UKR WWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "287814",
            "name": "India Goa First Division",
            "shortName": "IND GoaFD",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "108817",
            "name": "KTFF Cup",
            "shortName": "KTFF CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "118818",
            "name": "Aruba Division Di Honor",
            "shortName": "ARU D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "128819",
            "name": "Togo Premier Division",
            "shortName": "TOG D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "238810",
            "name": "Faroe Islands Super Cup",
            "shortName": "FAR SCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "248811",
            "name": "Kosovo Cup",
            "shortName": "Kosovo CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "258812",
            "name": "Nicaragua Youth League",
            "shortName": "NIC U20",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "268813",
            "name": "Oman 1st Division",
            "shortName": "OMA D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "278814",
            "name": "Iceland U19 Cup",
            "shortName": "ICE CU19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "288815",
            "name": "Senegal Ligue 2",
            "shortName": "SEN D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "298816",
            "name": "Tajikistan Vysshaya Liga",
            "shortName": "TAJ L1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "109818",
            "name": "Thai Division 3 League",
            "shortName": "THA D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "119819",
            "name": "Ukraine League Reserve",
            "shortName": "UKR RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "229810",
            "name": "Guyana Elite League",
            "shortName": "GY L1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "239811",
            "name": "Germany Berlin Cup",
            "shortName": "GER BC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "249812",
            "name": "Estonia II Liiga",
            "shortName": "EST D4",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "269814",
            "name": "Brazil Campeonato Capixaba",
            "shortName": "BRA CCX",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "279815",
            "name": "Colombia U20 League",
            "shortName": "COL U20",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "289816",
            "name": "Brazil U20 Cup",
            "shortName": "Bra CUU20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "100910",
            "name": "Brazil Campeonato Sergipano A2",
            "shortName": "BRA CEB",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "110911",
            "name": "Kazakhstan Reserve League",
            "shortName": "KAZ RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "120912",
            "name": "Singapore U19 League",
            "shortName": "SIN U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "130913",
            "name": "Germany Landespokal",
            "shortName": "GER LS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "140914",
            "name": "Slovenia 3.Liga",
            "shortName": "SLO D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "150915",
            "name": "Brazil Campeonato Mineiro U20",
            "shortName": "BRA MGY",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "160916",
            "name": "Algeria Womens Cup",
            "shortName": "Alg WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "170917",
            "name": "CONCACAF,CFU Women's Challenge Series",
            "shortName": "CFU WCS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "180918",
            "name": "Australia WA State League 1 Reserves",
            "shortName": "AUS WALR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "190919",
            "name": "Mongolia Premier League",
            "shortName": "MGL PL",
            "type": 1,
            "subLeagueName": "Relegation"
        },
        {
            "leagueId": "101911",
            "name": "Faroe Islands Division 1",
            "shortName": "FAR D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "121913",
            "name": "Scotland Football League Women",
            "shortName": "SCO WD",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "131914",
            "name": "Saint Kitts   Nevis Premier League",
            "shortName": "SKN PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "141915",
            "name": "Bahrain Elite Cup",
            "shortName": "BHR EC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "151916",
            "name": "UEFA Regions Cup",
            "shortName": "UEFA RC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "161917",
            "name": "Togo Cup",
            "shortName": "TOG CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "171918",
            "name": "Kazakhstan Division 2",
            "shortName": "KAZ D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "181919",
            "name": "Uzbekistan Youth League",
            "shortName": "UZB YL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "291910",
            "name": "Croatia First League Women",
            "shortName": "CRO FLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "112913",
            "name": "Kosovo Division 1",
            "shortName": "Kos D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "122914",
            "name": "Russian Matches",
            "shortName": "Rus Mat",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "132915",
            "name": "India Kerala Premier League",
            "shortName": "IND KPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "142916",
            "name": "Latvia Reserve League",
            "shortName": "LAT RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "152917",
            "name": "Ukraine Regional Cup",
            "shortName": "UKR RC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "162918",
            "name": "Moldovan women's football league",
            "shortName": "MD WC",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "172919",
            "name": "Turkey U21 Super Cup",
            "shortName": "TUR SC U21",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "282910",
            "name": "Brazil Campeonato Gaucho Youth",
            "shortName": "BRA CGY",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "292911",
            "name": "Ukraine Regional League",
            "shortName": "UKR RGL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "103913",
            "name": "Croatia Regional League",
            "shortName": "CRO RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "113914",
            "name": "Austria Cup Women",
            "shortName": "AUT CW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "123915",
            "name": "Uzbekistan League Women",
            "shortName": "UZB LW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "133916",
            "name": "Guatemala Liga Nacional Women",
            "shortName": "GUA LNW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "143917",
            "name": "Georgia Liga 3",
            "shortName": "Geo L3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "153918",
            "name": "Southern Ladies Cup",
            "shortName": "SLC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "163919",
            "name": "Romania Regional Cup",
            "shortName": "ROM RC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "273910",
            "name": "Brasileiro Aspirantes Sub 23",
            "shortName": "BRA BAS U23",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "293912",
            "name": "Brazil Catarinense Division 2",
            "shortName": "BRA CCD2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "104914",
            "name": "BRA SPB U19",
            "shortName": "BRA PA U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "114915",
            "name": "Argentina Copa Jujuy",
            "shortName": "ARG JC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "124916",
            "name": "Macau FA Cup",
            "shortName": "MAC FA CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "134917",
            "name": "Free Trade Port Cup",
            "shortName": "FTP CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "144918",
            "name": "Mideast Europe Cup",
            "shortName": "Europe CEC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "154919",
            "name": "Argentina Regional Cup",
            "shortName": "ARG RC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "264910",
            "name": "Uzbekistan 2nd Division",
            "shortName": "UZB D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "274911",
            "name": "India Regional Cup",
            "shortName": "IND RC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "284912",
            "name": "Poland U19 League",
            "shortName": "Pol U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "294913",
            "name": "Estonia Small Cup",
            "shortName": "Est SMC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "105915",
            "name": "Australia Tasmania Challenge League",
            "shortName": "TSA TCL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "115916",
            "name": "Australia Capital Territory Premier League Women",
            "shortName": "Aus CTLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "125917",
            "name": "Georgia League Women",
            "shortName": "Geo LW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "135918",
            "name": "OFC U-19 Championship",
            "shortName": "OFCCU19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "145919",
            "name": "Guatemala Cup",
            "shortName": "GUA CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "255910",
            "name": "Vietnam Championship U21",
            "shortName": "VIE U21",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "265911",
            "name": "England Southern League Central Division",
            "shortName": "ENG-S CE",
            "type": 1,
            "subLeagueName": "Playoff Final"
        },
        {
            "leagueId": "275912",
            "name": "Portugal U23",
            "shortName": "Por U23",
            "type": 1,
            "subLeagueName": "Relegation Quarterfinals"
        },
        {
            "leagueId": "285913",
            "name": "Brazil Copa Gaucho",
            "shortName": "Brazil CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "295914",
            "name": "Vietnam U19 Championship Women",
            "shortName": "WIE W U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "106916",
            "name": "Chinese Champions League",
            "shortName": "CHN CH",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "116917",
            "name": "OFC Women's Championship",
            "shortName": "OFC W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "136919",
            "name": "Malaysia Challenge Cup",
            "shortName": "MAS CGC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "246910",
            "name": "CONCACAF Nations League",
            "shortName": "CONCACAF NL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "256911",
            "name": "OFC Championship U16 Cup",
            "shortName": "OFC U16",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "266912",
            "name": "Philippines Cup",
            "shortName": "PH Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "286914",
            "name": "North American Football League Champions Cup",
            "shortName": "NOR A CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "296915",
            "name": "India Punjab Super League",
            "shortName": "Ind PSL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "107917",
            "name": "Paraguay Cup",
            "shortName": "PAR Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "117918",
            "name": "Nigeria Cup",
            "shortName": "Nigeria Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "127919",
            "name": "Manchester Premier Cup",
            "shortName": "Man PC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "237910",
            "name": "Scotland Reserve Cup",
            "shortName": "SCO RC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "247911",
            "name": "Cuba National League Women",
            "shortName": "Cuban WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "257912",
            "name": "Indonesia Liga 1 U19",
            "shortName": "Indo U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "267913",
            "name": "Panama Cup",
            "shortName": "PA Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "277914",
            "name": "Chile Tercera",
            "shortName": "CHI T",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "287915",
            "name": "Cyprus Division 3",
            "shortName": "CYP D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "297916",
            "name": "Brazil Santa Catarina Cup",
            "shortName": "BSC CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "108918",
            "name": "South Africa Reserve League",
            "shortName": "SA RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "118919",
            "name": "AFF Futsal Championship",
            "shortName": "AFF FC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "228910",
            "name": "Malaysia University League",
            "shortName": "MAS UL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "238911",
            "name": "Costa Rica U20 League",
            "shortName": "CRC U20",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "248912",
            "name": "Malawi Challenge Cup",
            "shortName": "MPRE CC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "258913",
            "name": "CAFA Women's Championship",
            "shortName": "CAFA W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "268914",
            "name": "Fiji Super Cup",
            "shortName": "FJ SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "278915",
            "name": "China U23 League",
            "shortName": "CHA CSL U23",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "288916",
            "name": "Northern Ireland Amateur Cup",
            "shortName": "NIR ACUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "298917",
            "name": "Oman U21 Championship",
            "shortName": "Oman C U21",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "109919",
            "name": "Aruba Cup",
            "shortName": "Aruba Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "219910",
            "name": "Italy Primavera Cup",
            "shortName": "ITA PC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "229911",
            "name": "Qatar U19 League",
            "shortName": "QAT U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "239912",
            "name": "Myanmar U21 League",
            "shortName": "Myan U21",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "249913",
            "name": "Myanmar U19 League",
            "shortName": "Myan U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "259914",
            "name": "Australia Pre-Season Cup",
            "shortName": "AUS PSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "269915",
            "name": "Myanmar League 2",
            "shortName": "MYA D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "279916",
            "name": "Andorra Second Division",
            "shortName": "Ando SD2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "289917",
            "name": "Malaysia U19 Cup",
            "shortName": "Mala U19C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "299918",
            "name": "Finland Kolmonen Cup",
            "shortName": "Finland KC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "100022",
            "name": "Grenada Premier Division",
            "shortName": "Grenada D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "110023",
            "name": "El Salvador Segunda Division",
            "shortName": "SLV D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "120024",
            "name": "Myanmar U20 League",
            "shortName": "Mya U20L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "130025",
            "name": "Nicaragua Cup",
            "shortName": "NIC CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "140026",
            "name": "Indonesia President Cup",
            "shortName": "IDN PC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "150027",
            "name": "Benin Ligue 1",
            "shortName": "BEN L1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "160028",
            "name": "Jordan U19 League",
            "shortName": "Jord U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "170029",
            "name": "Myanmar Cup",
            "shortName": "MYA Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "180020",
            "name": "Russian Winter Championship",
            "shortName": "Rus W-Cha",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "190021",
            "name": "Turkey University Championship",
            "shortName": "Tur U-Cha",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "101023",
            "name": "New Zealand Canterbury Championship League",
            "shortName": "NZ CCL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "111024",
            "name": "Thailand Division 4",
            "shortName": "Thai D4",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "121025",
            "name": "UAE U21 Cup",
            "shortName": "UAE U21-C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "131026",
            "name": "2019 Evergrande U17 CUP",
            "shortName": "EVD U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "141027",
            "name": "Cameroon League Women",
            "shortName": "CAE LW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "151028",
            "name": "French Guiana Ligue 1",
            "shortName": "GF L1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "161029",
            "name": "Argentina Super League Cup",
            "shortName": "ARG SLC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "171020",
            "name": "Argentina Reserve Cup",
            "shortName": "ARG Re Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "181021",
            "name": "Gambia FF Cup",
            "shortName": "GFA FFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "191022",
            "name": "Mauritania Division 2",
            "shortName": "MAU D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "102024",
            "name": "Ecuador Cup",
            "shortName": "ECU CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "112025",
            "name": "India League Women",
            "shortName": "IND WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "122026",
            "name": "Laos Premier League",
            "shortName": "LAO PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "132027",
            "name": "Lesotho Premier League",
            "shortName": "LS PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "142028",
            "name": "South Africa Diski Shield",
            "shortName": "RSA DS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "152029",
            "name": "Rwanda Womens League",
            "shortName": "RWA WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "162020",
            "name": "Grenada Cup",
            "shortName": "GD CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "172021",
            "name": "Kyrgyzstan Cup",
            "shortName": "KG CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "182022",
            "name": "Canadian Premier League",
            "shortName": "Can PL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "192023",
            "name": "Australia Gold Coast Weekend Metro",
            "shortName": "Aus GCWM",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "113026",
            "name": "CONIFA European Football Cup",
            "shortName": "Eur CONIFA-C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "123027",
            "name": "Australia South Australia State League 2",
            "shortName": "FFSA SL2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "133028",
            "name": "Laos Division 1",
            "shortName": "LAO D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "143029",
            "name": "Russia Regional Cup",
            "shortName": "Rus RC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "153020",
            "name": "Costa Rica Primera Division Women",
            "shortName": "CRC DW1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "163021",
            "name": "Haiti Division 2",
            "shortName": "HTD 2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "173022",
            "name": "Uruguay League Women",
            "shortName": "URU WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "183023",
            "name": "Chile U19 League",
            "shortName": "CHI U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "193024",
            "name": "Gambia Division 2",
            "shortName": "GFA D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "104026",
            "name": "Australia Sunshine Coast Premier League",
            "shortName": "AUS SCPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "114027",
            "name": "Brazil Copa Rio",
            "shortName": "BRA CR",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "124028",
            "name": "Pacific Games",
            "shortName": "PACG",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "134029",
            "name": "Pacific Games - Women's",
            "shortName": "PACGW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "144020",
            "name": "South Africa League Women",
            "shortName": "SAWL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "154021",
            "name": "Indonesia Liga 3",
            "shortName": "Indo D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "174023",
            "name": "Asia Trophy English-CUP",
            "shortName": "Asia EC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "194025",
            "name": "Indonesia Super League U20",
            "shortName": "IND U20",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "105027",
            "name": "Pakistan Challenge Cup",
            "shortName": "PKCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "115028",
            "name": "Wales FAW Championship",
            "shortName": "WAL FAWC",
            "type": 1,
            "subLeagueName": "North"
        },
        {
            "leagueId": "125029",
            "name": "African Youth Championship Women",
            "shortName": "CAF YCW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "135020",
            "name": "Laos LFF Cup",
            "shortName": "LAO LFFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "145021",
            "name": "Australia Brisbane Capital League 3",
            "shortName": "AUS BPLD3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "155022",
            "name": "Estonia U19 League",
            "shortName": "EST U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "165023",
            "name": "2019 Latin America Beach Soccer Championship",
            "shortName": "LABSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "175024",
            "name": "Brazil Copa Fares Lopes",
            "shortName": "Brazil CFL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "185025",
            "name": "Bahrain Super Cup",
            "shortName": "BS Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "195026",
            "name": "South America Woman U19 Championship",
            "shortName": "SAWC U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "106028",
            "name": "Croatia 3.Division",
            "shortName": "CRO D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "116029",
            "name": "Greece National B1",
            "shortName": "GRE D21",
            "type": 1,
            "subLeagueName": "South"
        },
        {
            "leagueId": "126020",
            "name": "Zimbabwe Cup",
            "shortName": "ZIM CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "136021",
            "name": "France U19 League Women",
            "shortName": "FRA WL U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "146022",
            "name": "Barbados Super Cup",
            "shortName": "BBSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "156023",
            "name": "Bolivia Regional League",
            "shortName": "BOL RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "166024",
            "name": "Indonesia Liga 1 Women",
            "shortName": "Ind W-D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "176025",
            "name": "Socca World Cup",
            "shortName": "SW Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "186026",
            "name": "Myanmar University Tournament",
            "shortName": "MYA UT",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "196027",
            "name": "USA NPSL Members Cup",
            "shortName": "USA NPSLMC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "107029",
            "name": "Algeria U19 Youth League",
            "shortName": "ALG U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "117020",
            "name": "Republic of Ireland U19 Cup",
            "shortName": "IREC U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "127021",
            "name": "Brazil Gaucho Women",
            "shortName": "BRA GW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "137022",
            "name": "Burkina Faso League",
            "shortName": "BFL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "147023",
            "name": "India Bangalore Super Division",
            "shortName": "IND BLR SD",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "157024",
            "name": "Malaysia Regional League",
            "shortName": "MAS RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "167025",
            "name": "Paraguay Women League",
            "shortName": "Parag WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "177026",
            "name": "Asian women Cup",
            "shortName": "Asian w Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "187027",
            "name": "Guatemala Reserve League",
            "shortName": "GUA RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "197028",
            "name": "El Salvador Liga Feminina",
            "shortName": "SLV LFW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "108020",
            "name": "West Asian Football Federation Championshi U15",
            "shortName": "WAWC U15",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "128022",
            "name": "Nepal super",
            "shortName": "NPE",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "138023",
            "name": "Vietnam University Championship",
            "shortName": "V-U NCH",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "158025",
            "name": "Grenada Club Championship",
            "shortName": "GRD CC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "168026",
            "name": "Uruguay Amateur Cup",
            "shortName": "URU AC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "178027",
            "name": "Hong Kong 3rd Division",
            "shortName": "HK D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "188028",
            "name": "Copa Premier Centroamericana",
            "shortName": "COP CE",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "198029",
            "name": "South American Olympics Qualifiers",
            "shortName": "SAOQ",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "109021",
            "name": "WCWU17 Africa qualifier",
            "shortName": "WCWU17 AQ",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "119022",
            "name": "Fiji League Women",
            "shortName": "FIJ WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "129023",
            "name": "Wales Women League Cup",
            "shortName": "WWLC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "139024",
            "name": "Paraguay U23 League",
            "shortName": "PAR U23",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "149025",
            "name": "Lithuania Super Cup",
            "shortName": "LIT SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "159026",
            "name": "DR Congo Super Ligue",
            "shortName": "DRC SL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "169027",
            "name": "Fiji Cup Women",
            "shortName": "Fiji Cup Women",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "179028",
            "name": "Nepal B Division",
            "shortName": "Nepal B",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "189029",
            "name": "Dominican Republic Super Cup",
            "shortName": "DOM Super Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "299020",
            "name": "Bangladesh Premier League Women",
            "shortName": "BGD WD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "100123",
            "name": "Luxembourg Promotion DHonneur",
            "shortName": "LUX D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "110124",
            "name": "Chile Primera Division Women",
            "shortName": "CHI WD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "120125",
            "name": "Belarus Amateur League",
            "shortName": "BLR AL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "130126",
            "name": "Burundi Cup",
            "shortName": "Burundi Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "140127",
            "name": "Tajikistan U21 League",
            "shortName": "TAJ U21",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "150128",
            "name": "Taiwan Mulan League Women",
            "shortName": "Chinese TML",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "160129",
            "name": "Burundi National League B",
            "shortName": "BI NLB",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "170120",
            "name": "Turkmenistan Premier League",
            "shortName": "TKM D1",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "180121",
            "name": "Turkmenistan Youth League",
            "shortName": "TKM Youth",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "190122",
            "name": "Belarus Amateur Cup",
            "shortName": "BLR AC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "101124",
            "name": "Korea League 4",
            "shortName": "KCL 4",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "111125",
            "name": "Montenegro Third League",
            "shortName": "MNE D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "121126",
            "name": "Montenegro U19 League",
            "shortName": "MNE U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "131127",
            "name": "Australia Darwin Premier League",
            "shortName": "AUS DPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "141128",
            "name": "Turkmenistan First League",
            "shortName": "TKM D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "151129",
            "name": "Faroe Islands Div 2",
            "shortName": "FAR D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "161120",
            "name": "Bulgaria Premier League Women",
            "shortName": "BUL PLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "171121",
            "name": "NWSL Challenge Cup",
            "shortName": "NWSLCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "181122",
            "name": "Australia Darwin Reserve League",
            "shortName": "AUS DRL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "191123",
            "name": "Mexico GNP",
            "shortName": "MGNP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "102125",
            "name": "Tanzania Premier League Women",
            "shortName": "TZA WPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "112126",
            "name": "USA NISA Independent Cup",
            "shortName": "USA NISAIC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "122127",
            "name": "Vietnam Cup Women",
            "shortName": "WIE VWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "132128",
            "name": "Tajikistan First League",
            "shortName": "TAJ FL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "142129",
            "name": "Australia Northern NSW Reserves League",
            "shortName": "NSW-N RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "152120",
            "name": "Lithuania II Lyga",
            "shortName": "Lit II Lyga",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "162121",
            "name": "Faroe Islands Women Premier League",
            "shortName": "FAR WD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "182123",
            "name": "Copa Telcel",
            "shortName": "Copa Telcel",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "192124",
            "name": "Mongolia First League",
            "shortName": "MON FL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "103126",
            "name": "Australia Sunshine Coast Premier League Reserves",
            "shortName": "Aus FPLR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "113127",
            "name": "Latvia 3. Liga",
            "shortName": "LAT L3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "123128",
            "name": "Australia Capital Territory U23 League",
            "shortName": "AUS CTL U23",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "133129",
            "name": "Fiji U19",
            "shortName": "Fiji U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "143120",
            "name": "Spain Regional League",
            "shortName": "SPA RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "153121",
            "name": "Republic of Ireland Munster Senior Cup",
            "shortName": "IRD MSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "173123",
            "name": "Brazil Campeonato Alagoano",
            "shortName": "BRA CA",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "183124",
            "name": "Poland Regional League",
            "shortName": "POL RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "193125",
            "name": "Crimea Premier League",
            "shortName": "CRI PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "104127",
            "name": "Costa Rica Super Cup",
            "shortName": "CRSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "114128",
            "name": "Czech Republic 5. Ligy",
            "shortName": "CZE DFL 5",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "124129",
            "name": "Slovakia Regional League",
            "shortName": "SK RL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "134120",
            "name": "Sri Lanka President Cup",
            "shortName": "STP PC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "144121",
            "name": "Croatia Regional Cup",
            "shortName": "CRO R Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "154122",
            "name": "Guatemala D3",
            "shortName": "GUA D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "164123",
            "name": "Kyrgyzstan Top Liga",
            "shortName": "Kyr TL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "174124",
            "name": "England Association Community  Women Shield",
            "shortName": "ENG FACS （W）",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "184125",
            "name": "International Baltic Cup",
            "shortName": "IBU",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "194126",
            "name": "Solomon Islands S League",
            "shortName": "Solo ISL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "105128",
            "name": "Syria Division 2",
            "shortName": "Syri D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "115129",
            "name": "Australia Northern NSW League 1 Reserves",
            "shortName": "ANNLR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "125120",
            "name": "Mauritania Cup",
            "shortName": "Mauritania Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "135121",
            "name": "Brazil national youth (U20) Football Championship",
            "shortName": "BNY",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "145122",
            "name": "Mongolia National League Women",
            "shortName": "MON NLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "155123",
            "name": "USA Independent League",
            "shortName": "USA IL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "165124",
            "name": "Germany Bavaria League",
            "shortName": "Germany BL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "185126",
            "name": "Italian Youth League B",
            "shortName": "ITA YL B",
            "type": 1,
            "subLeagueName": "Final"
        },
        {
            "leagueId": "195127",
            "name": "Nicaragua Segunda Division",
            "shortName": "NIC D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "106129",
            "name": "Taiwan League Division 2",
            "shortName": "Taiwan 2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "116120",
            "name": "Norway PostNord Cup",
            "shortName": "Norway PN Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "126121",
            "name": "Australia Tasmania Lakoseljac Cup",
            "shortName": "ATLC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "136122",
            "name": "Taiwan Cup Women",
            "shortName": "Taiwan CW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "146123",
            "name": "Turkmenistan Cup",
            "shortName": "TKM Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "156124",
            "name": "Japan Regional Cup",
            "shortName": "JAP CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "166125",
            "name": "Thailand League Women",
            "shortName": "THA W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "176126",
            "name": "Portugal Campeonato Nacional Women",
            "shortName": "POR DW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "186127",
            "name": "Australia Sunshine Coast Women's Premier League",
            "shortName": "AUS WSCPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "196128",
            "name": "FIFA Council cup U17",
            "shortName": "SAFA Cup U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "117121",
            "name": "MEA Football Association Challenge Cup",
            "shortName": "MEA CC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "127122",
            "name": "Solomon Islands Cup",
            "shortName": "SL Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "147124",
            "name": "Ecuador Primera Women",
            "shortName": "ECUW D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "157125",
            "name": "Argentina Primera B Women",
            "shortName": "APB W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "167126",
            "name": "Liberia Presidents Cup",
            "shortName": "LP Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "177127",
            "name": "Tanzania Cup",
            "shortName": "Tanzania Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "187128",
            "name": "Scotland Amateur League",
            "shortName": "ScA League",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "197129",
            "name": "Tanzania League Women",
            "shortName": "TZA WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "108121",
            "name": "Brazil Campeonato Potiguar 2",
            "shortName": "BRCP 2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "118122",
            "name": "Egypt Premier League Women",
            "shortName": "EGY WD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "128123",
            "name": "Spain Super Cup Women",
            "shortName": "SSCW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "138124",
            "name": "Italy Primavera Supercup",
            "shortName": "ITASYC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "148125",
            "name": "Colombia Regional League",
            "shortName": "COL RL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "158126",
            "name": "Madagascar Pro League",
            "shortName": "MAD PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "168127",
            "name": "Nepal National League Women",
            "shortName": "Nep NLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "178128",
            "name": "UEFA Europa Conference League",
            "shortName": "UEFA ECL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "188129",
            "name": "Liberia National League Women",
            "shortName": "LNLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "298120",
            "name": "Guatemala Segunda Division",
            "shortName": "GUA D4",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "109122",
            "name": "Nigeria League Women",
            "shortName": "NGA WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "119123",
            "name": "Bangladesh Championship League",
            "shortName": "BCL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "139125",
            "name": "Argentina Youth League",
            "shortName": "AEGT YL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "149126",
            "name": "Brazil Campeonato Sul-Matogrossense",
            "shortName": "BRA SM",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "159127",
            "name": "Australia Queensland Woman Cup",
            "shortName": "AQWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "169128",
            "name": "Australia NPL Queensland U23",
            "shortName": "ANQ  U23",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "179129",
            "name": "Russia Super Cup Women",
            "shortName": "RusSCW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "289120",
            "name": "Argentina Women Regional League",
            "shortName": "ARG WRl",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "299121",
            "name": "Honduras Liga de Ascenso",
            "shortName": "HON LDA",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "100224",
            "name": "Portugal Futsal",
            "shortName": "POR Futsal",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "110225",
            "name": "Iceland League Cup C",
            "shortName": "ICE LCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "120226",
            "name": "Belarus Super Cup Women",
            "shortName": "BWCW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "130227",
            "name": "Niger Super League",
            "shortName": "NGA NL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "140228",
            "name": "Nepal C Division",
            "shortName": "Nepal C",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "150229",
            "name": "Estonia women's super cup",
            "shortName": "EST WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "160220",
            "name": "India Goa League Women",
            "shortName": "IND GLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "170221",
            "name": "Australia Northern NSW Women’s Premier League",
            "shortName": "AUS NSW WPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "180222",
            "name": "Indonesia Menpora Cup",
            "shortName": "IDN MC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "190223",
            "name": "Tajikistan Super Cup",
            "shortName": "TAJ SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "101225",
            "name": "Brazil Campeonato Tocantinense",
            "shortName": "BRA CT",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "111226",
            "name": "Nepal Gold Cup",
            "shortName": "Nepal GC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "121227",
            "name": "Australia WA State Cup Women",
            "shortName": "WAUS WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "131228",
            "name": "Argentina Regional League",
            "shortName": "ARG Rl",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "151220",
            "name": "Panama First Division Women",
            "shortName": "BRA WD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "161221",
            "name": "Supercopa do Brasil",
            "shortName": "BSC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "171222",
            "name": "Portugal Youth Cup",
            "shortName": "POR YCup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "181223",
            "name": "Panama Liga Prom",
            "shortName": "BRA LP",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "191224",
            "name": "Olympic Women's (Preliminaries) Play-Offs",
            "shortName": "OWPPO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "102226",
            "name": "Solomon Islands League Women",
            "shortName": "Solo ISWL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "112227",
            "name": "Hungary U19 League Women",
            "shortName": "HUN WU19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "122228",
            "name": "USA NISA Legends Cup",
            "shortName": "USA NISALC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "132229",
            "name": "Algeria League Cup",
            "shortName": "ALG LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "142220",
            "name": "Qatar QFA Cup",
            "shortName": "QAT QC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "152221",
            "name": "Romania Liga 2 Women",
            "shortName": "R WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "162222",
            "name": "Burkina Faso Cup",
            "shortName": "BFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "172223",
            "name": "Zambia Cup",
            "shortName": "ZAM Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "182224",
            "name": "Uganda Super League Women",
            "shortName": "UWPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "192225",
            "name": "Australia Gold Coast Division 1",
            "shortName": "Aus GD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "103227",
            "name": "Tanzania First Division",
            "shortName": "Tanzania D1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "113228",
            "name": "Australia Tasmania Cup Women",
            "shortName": "ATWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "123229",
            "name": "Poland League Women",
            "shortName": "PWL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "133220",
            "name": "Zambia League Women",
            "shortName": "Zam WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "143221",
            "name": "Australia Womens Federation Cup",
            "shortName": "AUS WFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "153222",
            "name": "Serbia Cup Women",
            "shortName": "SER WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "163223",
            "name": "Tanzania Second Division",
            "shortName": "TSD",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "173224",
            "name": "New Zealand Regional Cup",
            "shortName": "NZRC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "183225",
            "name": "Samoa National League",
            "shortName": "SNL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "193226",
            "name": "Lithuania U19 League",
            "shortName": "LIT U19",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "104228",
            "name": "Samoa Premier League Women",
            "shortName": "SMA WPL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "114229",
            "name": "Australia WA Reserve Cup",
            "shortName": "AWARC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "124220",
            "name": "Australia Western Australia U23 League Women",
            "shortName": "WA WU23",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "134221",
            "name": "Germany Bavaria Cup",
            "shortName": "Germany BC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "144222",
            "name": "Iraq Cup",
            "shortName": "IRQ C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "154223",
            "name": "Peru Copa Bicentenario",
            "shortName": "PCB",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "164224",
            "name": "Mozambique Championship",
            "shortName": "MOZ C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "174225",
            "name": "Senegal FA Cup",
            "shortName": "SFC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "184226",
            "name": "Australia WA State League Cup",
            "shortName": "WAUS SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "194227",
            "name": "Nicaragua Women",
            "shortName": "NPD W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "105229",
            "name": "CONCACAF Leagues Cup",
            "shortName": "CONCACAF LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "115220",
            "name": "Portugal Liga 3",
            "shortName": "POR L3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "125221",
            "name": "Kosovo Super Cup",
            "shortName": "Kosovo S CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "135222",
            "name": "NSW Premier W-League",
            "shortName": "AUS WNSW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "145223",
            "name": "Spain Primera Division RFEF",
            "shortName": "SPDRFEF",
            "type": 1,
            "subLeagueName": "Finals"
        },
        {
            "leagueId": "155224",
            "name": "Arab Nations Women’s Cup",
            "shortName": "ARAB WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "165225",
            "name": "Denmark 2 Division Women",
            "shortName": "DEN WD2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "175226",
            "name": "Togo League Women",
            "shortName": "TOGW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "185227",
            "name": "Argentina Reserve League Women",
            "shortName": "ARG RESLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "195228",
            "name": "France Division 2 Women",
            "shortName": "FRA WD2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "106220",
            "name": "CECAFA Women’s Champions League",
            "shortName": "CECAFA WL",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "116221",
            "name": "Bosnia   Herzegovina Regional Cup",
            "shortName": "BOS RC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "126222",
            "name": "Republic of Ireland FAI Intermediate Cup",
            "shortName": "IRE MCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "136223",
            "name": "Japanese WE League",
            "shortName": "JWL",
            "type": 1,
            "subLeagueName": "League"
        },
        {
            "leagueId": "146224",
            "name": "Brazil U23 Cup",
            "shortName": "Bra CUU23",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "156225",
            "name": "Thailand Cup",
            "shortName": "Thailand Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "166226",
            "name": "Austrian Matches",
            "shortName": "AusM",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "176227",
            "name": "Germany Saarlandliga",
            "shortName": "GerS",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "186228",
            "name": "Brazil Campeonato Pernambucano A2",
            "shortName": "BRA PE2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "196229",
            "name": "Uzbekistan Super Cup Women",
            "shortName": "Uzb SWC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "107221",
            "name": "India JKFA Pro League",
            "shortName": "IND P1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "117222",
            "name": "Puerto Rico League",
            "shortName": "PUR L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "127223",
            "name": "Bhutan League Women",
            "shortName": "BLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "137224",
            "name": "Vanuatu Premier League",
            "shortName": "VANP L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "147225",
            "name": "Brazil Campeonato Carioca Women",
            "shortName": "BRA RJW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "157226",
            "name": "Chile U21 League",
            "shortName": "CHI U21",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "167227",
            "name": "Morocco League Women",
            "shortName": "MLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "177228",
            "name": "Germany Verbandsliga",
            "shortName": "Ger-V",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "187229",
            "name": "CAF Champions League Women",
            "shortName": "CAF WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "297220",
            "name": "Zanzibar Premier League",
            "shortName": "ZAN PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "108222",
            "name": "Ecuador Regional League",
            "shortName": "ECU RGL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "118223",
            "name": "South Africa National Div 2",
            "shortName": "SAND2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "128224",
            "name": "Romania Liga 4",
            "shortName": "ROM D4",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "138225",
            "name": "New Zealand South Central Series",
            "shortName": "SCS NZL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "148226",
            "name": "Kenya League Women",
            "shortName": "Kenya（W）",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "158227",
            "name": "WAFF U19 Championship",
            "shortName": "WAFF-U19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "168228",
            "name": "Colombia Copa Premium U25",
            "shortName": "Cos U25C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "178229",
            "name": "Kenya Super League",
            "shortName": "Ken-SL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "288220",
            "name": "Qatar Second Division Cup",
            "shortName": "QATL DC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "298221",
            "name": "WAFF U18 Championship",
            "shortName": "WAFF-U18",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "109223",
            "name": "Mexico Segunda Division",
            "shortName": "MEX D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "119224",
            "name": "Brazil Pernambucano Women",
            "shortName": "BRA PW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "129225",
            "name": "Republic of Ireland FAI Cup Women",
            "shortName": "IRD WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "139226",
            "name": "Costa Rica Super Cup Women",
            "shortName": "CRS CW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "149227",
            "name": "Greece Gamma Ethniki",
            "shortName": "GGE",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "159228",
            "name": "India IFA Shield",
            "shortName": "IND IS",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "169229",
            "name": "Botswana FA Cup",
            "shortName": "BOW FAC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "279220",
            "name": "Portugal Campeonato Nacional II Women",
            "shortName": "POR D2W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "289221",
            "name": "Italy Campionato Primavera 4",
            "shortName": "ICP 4",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "299222",
            "name": "Liberia FA Cup",
            "shortName": "LIFA C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "100325",
            "name": "Seychelles Premier League",
            "shortName": "SYC PR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "110326",
            "name": "Mexico Copa Conecta",
            "shortName": "MCC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "120327",
            "name": "Comoros Premier League",
            "shortName": "COM PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "130328",
            "name": "India Delhi Senior Division",
            "shortName": "IND DSD",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "140329",
            "name": "Argentina Trofeo de Campeones",
            "shortName": "ARG CT",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "160321",
            "name": "India Delhi League Women",
            "shortName": "IND DLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "170322",
            "name": "Liberia First Division",
            "shortName": "LFA",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "180323",
            "name": "Zanzibar Mapinduzi Cup",
            "shortName": "ZAN CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "190324",
            "name": "Bhutan Presidents Cup",
            "shortName": "BTN PCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "101326",
            "name": "Maldives Cup",
            "shortName": "MDV CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "111327",
            "name": "Egypt League Cup",
            "shortName": "EGY LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "121328",
            "name": "Costa Rica Cup Women",
            "shortName": "CRS CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "131329",
            "name": "Finland Ykkonen Cup",
            "shortName": "FIN YCUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "161322",
            "name": "Republic of Ireland Super Cup",
            "shortName": "RIS CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "171323",
            "name": "Singapore Charity Shield",
            "shortName": "SICH S",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "181324",
            "name": "Slovakia I Liga Women",
            "shortName": "SVK WD1",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "191325",
            "name": "AFC U22 Championship",
            "shortName": "ACF C U23",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "102327",
            "name": "Argentina Championship Women",
            "shortName": "ACP W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "112328",
            "name": "England Championship Women",
            "shortName": "ECH W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "122329",
            "name": "Uzbekistan Cup Women",
            "shortName": "Uzb WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "132320",
            "name": "Scotland Lowland League Cup",
            "shortName": "SCO LLC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "142321",
            "name": "CAF African Womens U17",
            "shortName": "CAN W-U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "152322",
            "name": "Djibouti Premier League",
            "shortName": "DJI PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "162323",
            "name": "New Zealand Cup Women",
            "shortName": "NZ WC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "172324",
            "name": "Belgium Second Amateur Divisio",
            "shortName": "BSA D",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "182325",
            "name": "Nicaragua Liga de Ascenso",
            "shortName": "NIC L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "192326",
            "name": "England Isthmian Cup",
            "shortName": "EIC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "103328",
            "name": "Ivory Coast Ligue 2",
            "shortName": "ICL-2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "113329",
            "name": "Bosnia   Herzegovina 1st League Women",
            "shortName": "BHL  W",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "123320",
            "name": "Mongolia Super Cup",
            "shortName": "MGL SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "133321",
            "name": "North African U17 Tournament",
            "shortName": "N AFR U17",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "143322",
            "name": "Australia Queensland Premier League 2",
            "shortName": "QLD D2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "153323",
            "name": "Brazil Campeonato Piauiense",
            "shortName": "Bra Pia",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "163324",
            "name": "Brazil Campeonato Roraimense",
            "shortName": "BRA RR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "173325",
            "name": "Brazil Campeonato Rondoniense",
            "shortName": "BRA RO",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "183326",
            "name": "Honduras Reserve League",
            "shortName": "HOR L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "104329",
            "name": "Malaysia Liga M3",
            "shortName": "MAS L3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "114320",
            "name": "Finalissima CUP",
            "shortName": "FLA CUP",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "124321",
            "name": "Kazakhstan Cup Women",
            "shortName": "KAH CW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "134322",
            "name": "USA MLS Next Pro League",
            "shortName": "MLS Next PL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "144323",
            "name": "Australia SA Premier League Women Reserves",
            "shortName": "FFSA WR",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "154324",
            "name": "Australia Queensland Premier League 4",
            "shortName": "QLD D4",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "164325",
            "name": "Australia Queensland Premier League 3",
            "shortName": "QLD D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "174326",
            "name": "Slovakia 4. Liga",
            "shortName": "Slo D4",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "184327",
            "name": "World Cup Woemn (Preliminaries) Play-Offs",
            "shortName": "WCWP-PO",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "194328",
            "name": "Iceland Super Cup Women",
            "shortName": "ISCW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "105320",
            "name": "Portugal U23 Cup",
            "shortName": "POR U23 C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "115321",
            "name": "Peru Campeonato Nacional Women",
            "shortName": "PCNW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "125322",
            "name": "Australia WA Premier League Women U21",
            "shortName": "WA PW U21",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "135323",
            "name": "Mali League Women",
            "shortName": "Mal WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "145324",
            "name": "Switzerland Cup Women",
            "shortName": "SUI Cup（W）",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "155325",
            "name": "Australia Victoria Premier League Women",
            "shortName": "AVPL(W）",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "165326",
            "name": "Uzbekistan Pro League",
            "shortName": "UZB D1B",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "175327",
            "name": "Brazil Campeonato Carioca Serie A2",
            "shortName": "BRA RJ A2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "185328",
            "name": "Romania U19 Cup",
            "shortName": "ROM CU19",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "195329",
            "name": "Brazil Campeonato Paranaense 2",
            "shortName": "BRA PR2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "106321",
            "name": "Brazil Campeonato Amapaense",
            "shortName": "BRA AMP",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "116322",
            "name": "Brazil Campeonato U20 Women",
            "shortName": "BCU20",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "126323",
            "name": "Puerto Rico League Women",
            "shortName": "PUR WL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "136324",
            "name": "Mongolia Second League",
            "shortName": "MSL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "146325",
            "name": "Croatia Women Cup",
            "shortName": "Croatia W",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "156326",
            "name": "Bosnia   Herzegovina 2nd League",
            "shortName": "B H 2nd L",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "166327",
            "name": "Brazil Campeonato Carioca C",
            "shortName": "BRA RJC",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "176328",
            "name": "Algeria Super Cup",
            "shortName": "Alge-SC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "186329",
            "name": "Scotland Regional Cup",
            "shortName": "SRC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "107322",
            "name": "HongKong 2 Division Cup",
            "shortName": "HK 2D C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "117323",
            "name": "USA USL League Two",
            "shortName": "USA-ULT",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "127324",
            "name": "Hong Kong Cup Women",
            "shortName": "HK-CW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "137325",
            "name": "Scottish Junior Cup",
            "shortName": "SJC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "147326",
            "name": "Lebanon League Women",
            "shortName": "LLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "157327",
            "name": "Hong Kong Division Three League Cup",
            "shortName": "HK 3D C",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "167328",
            "name": "Macau 3rd Division",
            "shortName": "Macau  D3",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "177329",
            "name": "Spanish Copa de Catalunya Women",
            "shortName": "SCCW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "287320",
            "name": "USL W-League Women",
            "shortName": "USL WLW",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "297321",
            "name": "Iceland Women 2 Deild",
            "shortName": "ICE LD2",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "108323",
            "name": "Finland U20 League cup",
            "shortName": "FinU20-LC",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "118324",
            "name": "Bolivia Reserve League",
            "shortName": "BRL",
            "type": 1,
            "subLeagueName": ""
        },
        {
            "leagueId": "128325",
            "name": "OFC Nations Cup Women",
            "shortName": "OFC NCW",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "138326",
            "name": "Uruguay Cup",
            "shortName": "U Cup",
            "type": 2,
            "subLeagueName": ""
        },
        {
            "leagueId": "148327",
            "name": "Brazil Campeonato Brasileiro A3 Women",
            "shortName": "Brazil W L3",
            "type": 1,
            "subLeagueName": ""
        }
    ]
    return data;
      
}