if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('about-link')) {
  document.getElementById('about-link').addEventListener('click', () => {
    document.getElementById('about-section').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('college-skills-link')) {
  document.getElementById('college-skills-link').addEventListener('click', () => {
    document.getElementById('college-skills-section').scrollIntoView({behavior: "smooth"})
  })
}