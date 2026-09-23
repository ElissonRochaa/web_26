// ==========================================
// DADOS DOS EVENTOS
// ==========================================

let events = [
    {
        id: 1,
        day: "10",
        month: "OUT",
        title: "Semana da Computação UPE",
        location: "Auditório Central",
        campus: "Recife",
        vacancies: 28
    },

    {
        id: 2,
        day: "15",
        month: "OUT",
        title: "Feira de Extensão UPE",
        location: "Praça de Eventos",
        campus: "Garanhuns",
        vacancies: 24
    },

    {
        id: 3,
        day: "20",
        month: "OUT",
        title: "Hackathon UPE",
        location: "Laboratório 3",
        campus: "Recife",
        vacancies: 0
    },

    {
        id: 4,
        day: "25",
        month: "OUT",
        title: "Roda de Conversa: Carreiras em Dados",
        location: "Auditório Central",
        campus: "Recife",
        vacancies: 42
    }
];


// ==========================================
// INSCRIÇÕES DO USUÁRIO
// ==========================================

let myRegistrations = [];


// ==========================================
// ELEMENTOS
// ==========================================

const eventsList = document.getElementById("eventsList");

const inscricoesList =
    document.getElementById("inscricoesList");

const eventosSection =
    document.getElementById("eventosSection");

const inscricoesSection =
    document.getElementById("inscricoesSection");

const menuEventos =
    document.getElementById("menuEventos");

const menuInscricoes =
    document.getElementById("menuInscricoes");


// ==========================================
// RENDERIZAR EVENTOS
// ==========================================

function renderEvents(campus = "Todos") {

    eventsList.innerHTML = "";

    const filteredEvents =
        campus === "Todos"
            ? events
            : events.filter(event => event.campus === campus);


    if (filteredEvents.length === 0) {

        eventsList.innerHTML = `
            <div class="empty-message">
                Nenhum evento encontrado.
            </div>
        `;

        return;
    }


    filteredEvents.forEach(event => {

        const isSubscribed =
            myRegistrations.includes(event.id);

        const isFull =
            event.vacancies <= 0;


        const eventElement =
            document.createElement("div");

        eventElement.className = "event";


        // IMPORTANTE:
        // Clique no evento abre o card/modal.
        eventElement.addEventListener("click", () => {

            openEventModal(event);

        });


        eventElement.innerHTML = `

            <div class="event-date">

                <span class="day">
                    ${event.day}
                </span>

                <span class="month">
                    ${event.month}
                </span>

            </div>


            <div class="event-info">

                <div class="event-title">
                    ${event.title}
                </div>

                <div class="event-location">

                    ${event.location}

                    <span>·</span>

                    Campus ${event.campus}

                </div>

            </div>


            <div class="event-spots
                ${isFull ? "full" : ""}">

                <strong>
                    ${
                        isFull
                            ? "Lotado"
                            : event.vacancies
                    }
                </strong>

                <span>
                    ${
                        isFull
                            ? "0 vagas"
                            : "vagas restantes"
                    }
                </span>

            </div>


            <div class="event-action">

                <button
                    class="
                        subscribe-btn
                        ${isSubscribed ? "subscribed" : ""}
                        ${isFull && !isSubscribed ? "disabled" : ""}
                    "
                    data-id="${event.id}"
                    ${isFull && !isSubscribed ? "disabled" : ""}
                >

                    ${
                        isSubscribed
                            ? "Inscrito ✓"
                            : isFull
                                ? "Lotado"
                                : "Inscrever-se"
                    }

                </button>

            </div>

        `;


        // =====================================
        // BOTÃO DE INSCRIÇÃO
        // =====================================

        const button =
            eventElement.querySelector(".subscribe-btn");


        button.addEventListener("click", (e) => {

            // Impede que o clique no botão
            // abra o modal do evento.
            e.stopPropagation();

            subscribeToEvent(event.id);

        });


        eventsList.appendChild(eventElement);

    });

}


// ==========================================
// INSCREVER-SE
// ==========================================

function subscribeToEvent(eventId) {

    const event =
        events.find(event => event.id === eventId);


    if (!event) {
        return;
    }


    // Não permite inscrição duplicada.
    if (myRegistrations.includes(eventId)) {
        return;
    }


    // Não permite inscrição se estiver lotado.
    if (event.vacancies <= 0) {
        return;
    }


    // Adiciona inscrição.
    myRegistrations.push(eventId);


    // Diminui a quantidade de vagas.
    event.vacancies--;


    // Atualiza a tela.
    renderEvents();


    // Atualiza também "Minhas inscrições".
    renderMyRegistrations();


    // Feedback simples.
    alert(
        `Inscrição realizada com sucesso em "${event.title}"!`
    );
}


// ==========================================
// MINHAS INSCRIÇÕES
// ==========================================

function renderMyRegistrations() {

    inscricoesList.innerHTML = "";


    const registeredEvents =
        events.filter(event =>
            myRegistrations.includes(event.id)
        );


    if (registeredEvents.length === 0) {

        inscricoesList.innerHTML = `

            <div class="empty-message">

                Você ainda não possui inscrições.

            </div>

        `;

        return;
    }


    registeredEvents.forEach(event => {

        const eventElement =
            document.createElement("div");

        eventElement.className = "event";


        eventElement.addEventListener(
            "click",
            () => openEventModal(event)
        );


        eventElement.innerHTML = `

            <div class="event-date">

                <span class="day">
                    ${event.day}
                </span>

                <span class="month">
                    ${event.month}
                </span>

            </div>


            <div class="event-info">

                <div class="event-title">
                    ${event.title}
                </div>

                <div class="event-location">

                    ${event.location}

                    <span>·</span>

                    Campus ${event.campus}

                </div>

            </div>


            <div class="event-spots">

                <strong>
                    Inscrito ✓
                </strong>

                <span>
                    ${event.vacancies} vagas restantes
                </span>

            </div>


            <div class="event-arrow">
                →
            </div>

        `;


        inscricoesList.appendChild(eventElement);

    });

}


// ==========================================
// MODAL / CARD DO EVENTO
// ==========================================

const eventModal =
    document.getElementById("eventModal");

const modalContent =
    document.getElementById("modalContent");

const closeModal =
    document.getElementById("closeModal");


function openEventModal(event) {

    const isSubscribed =
        myRegistrations.includes(event.id);


    modalContent.innerHTML = `

        <h2 class="modal-title">
            ${event.title}
        </h2>

        <p class="modal-info">
            <strong>Data:</strong>
            ${event.day} de ${event.month}
        </p>

        <p class="modal-info">
            <strong>Local:</strong>
            ${event.location}
        </p>

        <p class="modal-info">
            <strong>Campus:</strong>
            ${event.campus}
        </p>

        <p class="modal-info">
            <strong>Vagas disponíveis:</strong>
            ${event.vacancies}
        </p>

        ${
            isSubscribed
                ? `
                    <p class="modal-info">
                        <strong>
                            Você já está inscrita neste evento.
                        </strong>
                    </p>
                  `
                : ""
        }

    `;


    eventModal.classList.remove("hidden");
}


// ==========================================
// FECHAR MODAL
// ==========================================

closeModal.addEventListener("click", () => {

    eventModal.classList.add("hidden");

});


document
    .querySelector(".modal-overlay")
    .addEventListener("click", () => {

        eventModal.classList.add("hidden");

    });


// ==========================================
// FILTROS
// ==========================================

const filters =
    document.querySelectorAll(".filter");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item =>
            item.classList.remove("active")
        );

        filter.classList.add("active");


        const campus =
            filter.dataset.campus;


        renderEvents(campus);

    });

});


// ==========================================
// MENU — EVENTOS
// ==========================================

menuEventos.addEventListener("click", () => {

    eventosSection.classList.remove("hidden");

    inscricoesSection.classList.add("hidden");


    menuEventos.classList.add("active");

    menuInscricoes.classList.remove("active");

});


// ==========================================
// MENU — MINHAS INSCRIÇÕES
// ==========================================

menuInscricoes.addEventListener("click", () => {

    eventosSection.classList.add("hidden");

    inscricoesSection.classList.remove("hidden");


    menuEventos.classList.remove("active");

    menuInscricoes.classList.add("active");


    renderMyRegistrations();

});


// ==========================================
// INICIALIZAÇÃO
// ==========================================

renderEvents();

renderMyRegistrations();