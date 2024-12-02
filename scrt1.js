    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Initialize the default tab
        document.getElementById("defaultOpen").click();

        // Add event listeners to buttons
        const buttons = document.querySelectorAll('.add-to-cart');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior

                // Create notification element
                const notification = document.createElement('div');
                notification.className = 'notification';
                notification.textContent = 'Item added to cart!';

                // Remove existing notification if any
                const existingNotification = document.querySelector('.notification');
                if (existingNotification) {
                    existingNotification.remove();
                }

                // Add notification to body
                document.body.appendChild(notification);

                // Show notification
                notification.style.display = 'block';
                setTimeout(() => {
                    notification.style.display = 'none';
                    notification.remove();
                }, 3000);
            });
        });
    });