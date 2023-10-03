class KeysController {
  private apiKeys = [
    'd11e71fe-35f6-4512-896d-d9880388525c',
    '864bc0bb-a854-41d0-b411-dcc8376d4427',
    '182fab2b-cb7a-4562-b6c0-fefa3b89590f',
    '1eed0f50-3f3b-49f1-b171-1547c878ae42',
    '7c38ea01-5532-4218-b760-e89055155e5a',
    '268e5c31-c58a-4bdb-b553-7bb959f052b3',
    'c788be1c-9682-4896-bbe2-275683222b78',
    '5724b5bc-0be1-4cb9-a88e-710c097a9c01',
    'f36bbe93-5681-4a31-a74f-f9f36450cdb7',
    'e90cfcea-db6a-4efc-8436-577ca4a173d0',
    '70b23d2e-8d30-4bd6-ad84-b3addb39fa44',
    'b7f13992-d5e9-4deb-a225-1692bcdd1f07',
    '4360dfd4-1413-43a7-b5a6-626e1fe9713d',
    '34f08f04-ad84-4aec-a0dd-bab9cc1bd380',
    'fc38be4e-921f-4af0-8179-561fd1af5e4a',
    'd6a2af2f-ddaf-4bf0-bcba-a6322a5c79f7',
    '4ff0511d-539f-4451-98c7-d1076f9af595',
    'f7de8df4-0ae7-4497-a141-7f6248e170eb',
    'ddaadbdb-686d-4194-ba6e-cd6b7a171d5d',
    '9e8a516e-69e2-4800-815b-cc50b900a5c8',
  ] as const;

  public getRandomKey(): string {
    const randomIndex = Math.floor(Math.random() * this.apiKeys.length);

    return this.apiKeys[randomIndex];
  }
}

export const keysController = new KeysController();
