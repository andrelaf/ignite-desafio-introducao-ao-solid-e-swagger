import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const changedUser = this.turnUserAdminUseCase.execute({ user_id });

      return response.json(changedUser);
    } catch ({ message }) {
      return response.status(404).json({ error: message });
    }
  }
}

export { TurnUserAdminController };
