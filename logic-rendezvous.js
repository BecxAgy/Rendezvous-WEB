        var semaphore1 = false;
		var semaphore2 = false;

        const executando = document.querySelector("#executando");

            document.querySelector("#btn1").addEventListener("click", () => {
            executando.style.display = "block";
            });

		function iniciarProcesso1() {
			//libero o semaforo para o processo dois
			semaphore1 = true; 
			
			document.querySelector("#btn1").disabled = true;
			document.querySelector("#btn2").disabled = false;
		}

		function iniciarProcesso2() {
			
			semaphore2 = true;
			checkSemaphores();
            executando.style.display = "none";
			document.querySelector("#btn2").disabled = true;
		}

		function checkSemaphores() {
			if (semaphore1 && semaphore2) {
			
                document.querySelector(".container").classList.add("green");
			}
		}

      
            
