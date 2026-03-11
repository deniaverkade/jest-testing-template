import { validatePassword } from './passwordValidator';

describe('Password Validator', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: geldig wachtwoord geeft isValid true', () => {
    const result = validatePassword('Welkom123');
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  test('te kort wachtwoord geeft error', () => {
    // TODO: Test of 'Test1' invalid is
    // Hint: check of isValid false is
    const password = "Test1";
    const result = validatePassword(password);
    expect(password.length).toBeGreaterThanOrEqual(8);
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual(['Minimaal 8 karakters']);
  });

  test('wachtwoord zonder nummer geeft error', () => {
    // TODO: Test of 'Welkomtestje' invalid is
    const password = "Welkomtestje";
    const result = validatePassword(password);
    expect(password).toMatch(/[0-9]/);
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual(['Moet minimaal 1 nummer bevatten']);
  });

  test('wachtwoord zonder hoofdletter geeft error', () => {
    // TODO: Test of 'welkom123' invalid is
    const password = "welkom123";
    const result = validatePassword(password);
    expect(result.password).toMatch(/[A-Z]/);
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual(['Moet minimaal 1 hoofdletter bevatten']);
  });

  test('errors array bevat juiste foutmeldingen', () => {
    // TODO: Test of 'test' meerdere errors teruggeeft
    // Hint: gebruik .toContain() om te checken of een error in de array zit
    const result = validatePassword("test");
    expect(result.errors).toContain(['Minimaal 8 karakters', 'Moet minimaal 1 nummer bevatten', 'Moet minimaal 1 hoofdletter bevatten'])
  });

});

//Alles met het wachtwoord geeft undefined terug, ik weet niet hoe ik dit moet oplossen. 