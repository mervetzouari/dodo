<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/"> DODO</RouterLink>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="text-end" id="nav">
                    <RouterLink class="home" to="/"><li>Home</li></RouterLink>
                    <RouterLink to="/Lire"
                        ><li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Hist-Lire
                            </a>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <RouterLink
                                        class="dropdown-item"
                                        to="/Kissati"
                                        >Kissati
                                        <span
                                            style="
                                                font-size: 12px;
                                                opacity: 50%;
                                            "
                                        >
                                            (Lire-Arabe)</span
                                        ></RouterLink
                                    >
                                </li>
                                <li>
                                    <RouterLink
                                        class="dropdown-item"
                                        to="/Lire35"
                                        >Hist de 3 à 5 ans</RouterLink
                                    >
                                </li>
                                <li>
                                    <RouterLink
                                        class="dropdown-item"
                                        to="/Lire5"
                                        >Hist +5 ans
                                    </RouterLink>
                                </li>
                            </ul>
                        </li></RouterLink
                    >
                    <RouterLink to="/Video" replace>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Hist-Vidéo
                            </a>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <RouterLink
                                        class="dropdown-item"
                                        to="/KissatiVid"
                                        >Kissati
                                        <span
                                            style="
                                                font-size: 12px;
                                                opacity: 50%;
                                            "
                                        >
                                            (Vidéo-Arabe)</span
                                        ></RouterLink
                                    >
                                </li>
                                <li>
                                    <RouterLink
                                        class="dropdown-item"
                                        to="/VidFr"
                                        >Vidéo-Fr</RouterLink
                                    >
                                </li>
                                <li>
                                    <RouterLink
                                        class="dropdown-item"
                                        to="/VidEng"
                                        >Vidéo-Eng</RouterLink
                                    >
                                </li>
                            </ul>
                        </li></RouterLink
                    >
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: "HeaderPage",
};
</script>

<style lang="css" scoped>
.navbar {
    background-color: #9a2f43 !important;
}
nav {
    padding-top: 0px;
}
a {
    color: #f5cbb9;
}
#nav a:hover {
    color: #fbf7f5;
}
#nav a.active {
    color: #fbf7f5;
}

#nav a.router-link-exact-active {
    color: #f5cbb9;
}
#nav .home.router-link-exact-active {
    color: #fbf7f5;
}

a [data-v-7edd3acc] {
    background: none;
}

.dropdown li a:hover {
    background: #f5cbb9;
}
.dropdown-item {
    color: #c9867e;
}
#nav {
    margin: 0px;
}
.dropdown-menu.show {
    background: #fbf7f5 !important;
}
#navbarDropdownMenuLink {
    color: #f5cbb9;
}
.navbar-toggler {
    margin-top: 7px;
}
@media only screen and (max-width: 1100px) {
    #nav a {
        display: inline;
        padding: 0px;
        text-align: left;
    }
    .dropdown-menu.show[data-v-7edd3acc] {
        padding: 10px;
    }
    .navbar-toggler {
        margin-right: 3%;
    }
}
</style>
