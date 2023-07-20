const pagarme = require('pagarme');

async function validateBankAccount() {
  try {
    const client = await pagarme.client.connect({ api_key: 'ak_live_OAzDrwjZEk09v93T8RZjctZBxKs65v' });

    const bankAccount = {
      bank_code: '341',
      agencia: '1234',
      agencia_dv: '1',
      conta: '12345',
      conta_dv: '1',
      legal_name: 'John Doe',
      cpf: '12345678900',
    };
    const result = await client.bankAccounts.create(bankAccount);
    console.log(result, "==>result");
    if (result.valid) {
      console.log('Bank account validation succeeded!');
    } else {
      console.error('Bank account validation failed:', result);
    }
  } catch (err) {
    console.error('Error validating bank account:', err.response.errors);
  }
}

validateBankAccount();
