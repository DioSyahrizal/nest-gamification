import { Test, TestingModule } from '@nestjs/testing';
import { ControlController } from './control.controller';
import { ControlService } from './control.service';

describe('ControlController', () => {
  let controller: ControlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControlController],
      providers: [ControlService],
    }).compile();

    controller = module.get<ControlController>(ControlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
