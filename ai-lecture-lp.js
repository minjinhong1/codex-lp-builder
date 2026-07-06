const CONSULT_FORM_URL = "mailto:stepmailkr@gmail.com?subject=AI%20%EA%B0%95%EC%9D%98%20%EB%AC%B4%EB%A3%8C%20%EC%83%81%EB%8B%B4%20%EC%8B%A0%EC%B2%AD&body=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94.%20AI%20%EA%B0%95%EC%9D%98%20%EC%83%81%EB%8B%B4%EC%9D%84%20%EC%8B%A0%EC%B2%AD%ED%95%98%EA%B3%A0%20%EC%8B%B6%EC%8A%B5%EB%8B%88%EB%8B%A4.%0A%0A%EC%9D%B4%EB%A6%84%3A%0A%EC%97%B0%EB%9D%BD%EC%B2%98%3A%0A%EC%9B%90%ED%95%98%EB%8A%94%20%EA%B0%95%EC%9D%98%2F%EC%83%81%EB%8B%B4%20%EB%82%B4%EC%9A%A9%3A";

const consultButtons = document.querySelectorAll("[data-consult-button]");

consultButtons.forEach((button) => {
  if (!CONSULT_FORM_URL) {
    button.setAttribute("aria-label", "이메일 상담 링크 연결 예정");
    return;
  }

  button.setAttribute("href", CONSULT_FORM_URL);
  button.setAttribute("target", "_blank");
  button.setAttribute("rel", "noopener noreferrer");
});
