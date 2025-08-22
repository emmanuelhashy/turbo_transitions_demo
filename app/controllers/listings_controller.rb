class ListingsController < ApplicationController
  def show
    # Sample property data
    properties = {
      "1" => {
        id: "1",
        title: "Modern London Apartment",
        location: "London, UK",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 145,
        nights: 2,
        rating: "4.96",
        description: "A beautiful modern apartment in the heart of London with stunning city views."
      },
      "2" => {
        id: "2", 
        title: "Cozy Cottage",
        location: "Cotswolds, UK",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 230,
        nights: 3,
        rating: "4.92",
        description: "A charming cottage in the peaceful Cotswolds countryside."
      },
      "3" => {
        id: "3",
        title: "Modern City Loft", 
        location: "Manchester, UK",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 180,
        nights: 2,
        rating: "4.84",
        description: "A stylish loft in Manchester's vibrant city center."
      },
      "4" => {
        id: "4",
        title: "Seaside Villa",
        location: "Brighton, UK", 
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        price: 295,
        nights: 4,
        rating: "4.98",
        description: "A luxurious villa with stunning sea views in Brighton."
      }
    }
    
    @property = properties[params[:id]] || properties["1"]
  end
end
