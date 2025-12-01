document.addEventListener('DOMContentLoaded', () => {
  const numberInputs = [...document.querySelectorAll('.app-inp-number')];

  numberInputs.forEach((elem) =>
    elem.addEventListener('change', () => {
      const result = numberInputs.reduce(
        (result, elem) =>
          result +
          (Number.isNaN(result + elem.valueAsNumber) ? 0 : elem.valueAsNumber),
        0,
      );

      const numberOutput = [...document.querySelectorAll('.app-out-number')];
      numberOutput.forEach((elem) => (elem.textContent = result));
    }),
  );
});

// result = ค่าก่อนหน้า elem = ค่าปัจจุบัน
