let testimonialText = document.querySelector("#user-testimonial");
let userNameText = document.querySelector("#user-name");
let userImage = document.querySelector(".user-img");
let previousTestimonialButton = document.querySelector("#prev-testimonial");
let nextTestimonialButton = document.querySelector("#next-testimonial");
let userCounter = 0;

let userData = [
  {
    Image: "images/image-tanya.jpg",
    Name: "Tanya Sinclair",
    Role: "UX Engineer",
    Testimonial:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
  },

  {
    Image: "images/image-john.jpg",
    Name: "John Tarkpor",
    Role: "Junior Front-end Developer",
    Testimonial:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
  },
];

let displayUserInfo = (showUserNo) => {
	userImage.src = userData[showUserNo].Image;
	userNameText.innerHTML = `${userData[showUserNo].Name}&nbsp;<span>&nbsp;${userData[showUserNo].Role}</span>`;
	testimonialText.innerText = userData[showUserNo].Testimonial;

	testimonialText.classList.add('animate-text');
	userNameText.classList.add('animate-text');
	
	setTimeout(() => {
		testimonialText.classList.remove("animate-text");
    userNameText.classList.remove("animate-text");
	}, 500)
};

let previousTestimonial = () => {
	if (userCounter != 0) {
		userCounter--;
		displayUserInfo(userCounter);
	}
};

let nextTestimonial = () => {
	if (userCounter < userData.length - 1) {
    userCounter++;
    displayUserInfo(userCounter);
  }
}

window.addEventListener('keydown', (event) => {
	if (event.key == 'ArrowRight') {
		nextTestimonial();
	}
});

window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft") {
    previousTestimonial();
  }
});