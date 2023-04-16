const nav = {
    units: {
        name: "Помещения",
        url: "/units",
        subnav: {
            add: {
                name: "Добавить помещение",
                url: "/add"
            },
            trash: {
                name: "Удалённые помещения",
                url: "/trash"
            }
        }
    },
    owners: {
        name: "Собственники",
        url: "/owners",
        subnav: {
            add: {
                name: "Добавить собственника",
                url: "/add"
            },
            trash: {
                name: "Удалённые собственники",
                url: "/trash"
            }
        }
    },
    documents: {
        name: "Документы",
        url: "/documents",
        subnav: {
            add: {
                name: "Добавить собственника",
                url: "/add"
            },
            trash: {
                name: "Удалённые собственники",
                url: "/trash"
            }
        }
    },
    meetings: {
        name: "Собрания",
        url: "/meetings",
        subnav: {
            add: {
                name: "Добавить собрание",
                url: "/add"
            },
            trash: {
                name: "Удалённые собрания",
                url: "/trash"
            }
        }
    }
};

module.exports = nav;