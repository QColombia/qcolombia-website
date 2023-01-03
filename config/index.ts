const config = {
  navBarMenu: [
    {
      label: "mainMenu.courses",
      href: "/courses",
    },
    {
      label: "mainMenu.projects",
      href: "/projects",
    },
    {
      label: "mainMenu.about",
      href: "/about",
    },
  ],
  homeHeroCode: `
    # Be a part of the Quantum revolution

    from numpy import pi
    from qiskit import QuantumCircuit

    # Learn how to implement quantum algorithms
    # with Qiskit SDK

    qc_awesome = QuantumCircuit(2, 2)
    qc_awesome.h(0)
    qc_awesome.cx(0,1)

    # Learn how to run your algorithms
    # on real quantum devices

    qc.measure_all()
    `,
  socialMedia: {
    github: "https://github.com/QColombia",
    instagram: "https://github.com/QColombia",
    discord: "https://github.com/QColombia",
    facebook: "https://github.com/QColombia",
  },
};

export default config;
