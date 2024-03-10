import { TestBed } from '@angular/core/testing';

import { PanierService } from './panier.service';

describe('PanierService', () => {
  let service: PanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierService);
  });

  it("ADD: Ajout d'un élément ''", () => {
    expect(service.add('')).toBeFalsy();
  });

  it("ADD: Ajout d'un élément undefined", () => {
    expect(service.add(undefined)).toBeFalsy();
  });

  it("ADD: Ajout d'un élément réel sans quantité", () => {
    expect(service.add('des pates')).toBeTruthy();
  });

  it("ADD: Ajout d'un élément réel avec quantité", () => {
    expect(service.add('des pates', 520)).toBeTruthy();
  });
});
