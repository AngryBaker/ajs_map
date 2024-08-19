import ErrorRepository from '../app';

const errorRepository = new ErrorRepository();
errorRepository.errors.set(404, 'Not found');
errorRepository.errors.set(500, 'Internal server error');

test('should return errors text', () => {
  const result = errorRepository.translate(500);

  expect(result).toBe("Internal server error");
});

test('should return "Unknown error" if errors isnt find', () => {
  const result = errorRepository.translate(5001);

  expect(result).toBe("Unknown error");
});
