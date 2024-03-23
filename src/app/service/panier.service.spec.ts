import { TestBed } from '@angular/core/testing';

import { PanierService } from './panier.service';

describe('PanierService', () => {
  let service: PanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierService);
  });

  it("ADD: Ajout d'un élément ''", () => {
    expect(service.add('', '', '')).toBeFalsy();
  });

  it("ADD: Ajout d'un élément '5' sans prix et nom", () => {
    expect(service.add('5', '', '')).toBeFalsy();
  });

  it("ADD: Ajout d'un élément 'Hello' sans prix ", () => {
    expect(service.add('5', 'hello', '')).toBeFalsy();
  });

  it('Somme:  Voir des éléments ', () => {
    service.add('5', 'hello', '50');

    expect(service.somme()).toBe(50);
  });
});
